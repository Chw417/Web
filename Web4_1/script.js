document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const submitBtn = document.getElementById('submitBtn');
    const dynamicList = document.getElementById('dynamicList');
    const dynamicCheckboxes = document.getElementById('dynamicCheckboxes');
    const phoneInput = document.getElementById('phoneNumber');
    const address2Input = document.getElementById('streetAddress2');
    const address2Counter = document.getElementById('address2Counter');
    const resultsTable = document.getElementById('resultsTable');

    const dynamicListError = document.createElement('span');
    dynamicListError.classList.add('error');
    dynamicListError.id = 'dynamicListError';
    dynamicList.insertAdjacentElement('afterend', dynamicListError);

    // 输入掩码正则表达式
    const patterns = {
        phone: /^\(\d{3}\) \d{3}-\d{4}$/,
        email: /^[\w-]+(\.[\w-]+)*@northeastern\.edu$/,
        zip: /^\d{5}$/
    };

    checkFormValidity(); // 初始检查表单有效性

    phoneInput.addEventListener('input', function(e) {
        const numbers = e.target.value.replace(/\D/g, '');
        const match = numbers.match(/^(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !match[2] ? match[1] : 
            `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
        validateField(phoneInput, patterns.phone, 'phoneNumberError', 'Invalid phone format');
        checkFormValidity();
    });

    dynamicList.addEventListener('change', function() {
        updateDynamicCheckbox();
        checkFormValidity();
    });

    function updateDynamicCheckbox() {
        const selectedItem = dynamicList.value;
        dynamicCheckboxes.innerHTML = ''; // 清空旧复选框

        if (selectedItem) {
            const checkboxLabel = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'selectedCheckbox';
            checkbox.id = `checkbox-${selectedItem}`;
            checkbox.value = selectedItem;

            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = `input-${selectedItem}`;
            inputField.id = `input-${selectedItem}`;
            inputField.placeholder = `Enter details for ${selectedItem}`;
            inputField.style.display = 'none'; // 默认隐藏

            const inputError = document.createElement('span');
            inputError.classList.add('error');
            inputError.id = `input-${selectedItem}-error`;

            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    inputField.style.display = 'inline-block';
                } else {
                    inputField.style.display = 'none';
                    inputField.value = ''; // 清空输入框
                }
                checkFormValidity();
            });

            inputField.addEventListener('input', checkFormValidity);

            checkboxLabel.appendChild(checkbox);
            checkboxLabel.appendChild(document.createTextNode(` Confirm selection: ${selectedItem}`));

            dynamicCheckboxes.appendChild(checkboxLabel);
            dynamicCheckboxes.appendChild(inputField);
            dynamicCheckboxes.appendChild(inputError);
        }
    }

    address2Input.addEventListener('input', function() {
        address2Counter.textContent = `${this.value.length}/20 characters`;
        if (this.value.length > 20) {
            this.value = this.value.slice(0, 20);
        }
    });

    function validateField(field, regex, errorId, errorMsg) {
        const errorElement = document.getElementById(errorId);
        if (!regex.test(field.value)) {
            errorElement.textContent = errorMsg;
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    function checkFormValidity() {
        const isTitleValid = document.querySelector('input[name="title"]:checked') !== null;
        document.getElementById('titleError').textContent = isTitleValid ? '' : 'Please select a title';

        const isSourceValid = document.querySelector('input[name="source"]:checked') !== null;
        document.getElementById('sourceError').textContent = isSourceValid ? '' : 'Please select at least one source';

        const isDynamicListValid = dynamicList.value !== '';
        document.getElementById('dynamicListError').textContent = isDynamicListValid ? '' : 'Please select an item';

        let isCheckboxValid = true;
        const checkbox = document.querySelector('#dynamicCheckboxes input[type="checkbox"]');
        const inputField = document.getElementById(`input-${dynamicList.value}`);
        const inputError = document.getElementById(`input-${dynamicList.value}-error`);
        
        if (checkbox && checkbox.checked) {
            if (!inputField.value.trim()) {
                inputError.textContent = 'This field is required';
                isCheckboxValid = false;
            } else {
                inputError.textContent = '';
            }
        }

        const validations = [
            validateField(document.getElementById('firstName'), /^[A-Za-z ]{2,50}$/, 'firstNameError', '2-50 letters only'),
            validateField(document.getElementById('lastName'), /^[A-Za-z ]{2,50}$/, 'lastNameError', '2-50 letters only'),
            validateField(document.getElementById('emailId'), patterns.email, 'emailIdError', 'Must be @northeastern.edu'),
            validateField(phoneInput, patterns.phone, 'phoneNumberError', 'Invalid phone format'),
            validateField(document.getElementById('zipcode'), patterns.zip, 'zipcodeError', '5-digit zip required'),
            validateField(document.getElementById('streetAddress1'), /^.{5,100}$/, 'streetAddress1Error', '5-100 characters required'),
            validateField(document.getElementById('comments'), /^.{10,500}$/, 'commentsError', '10-500 characters required'),
            isTitleValid,
            isSourceValid,
            isDynamicListValid,
            isCheckboxValid
        ];

        submitBtn.disabled = !validations.every(v => v === true);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        
        let table = resultsTable.querySelector('table');

        if (!table) {
            table = document.createElement('table');
            table.border = "1";
            table.innerHTML = '<tr><th>Field</th><th>Value</th></tr>';
            resultsTable.appendChild(table);
        }

        // 添加新提交的数据
        let newRow = document.createElement('tr');
        newRow.innerHTML = `<td colspan="2"><strong>New Submission</strong></td>`;
        table.appendChild(newRow);

        formData.forEach((value, key) => {
            let row = document.createElement('tr');
            row.innerHTML = `<td>${key}</td><td>${value || 'N/A'}</td>`;
            table.appendChild(row);
        });

        form.reset();
        dynamicCheckboxes.innerHTML = ''; // 清空复选框
        checkFormValidity();  // 重新检查表单状态，禁用提交按钮
    });

    document.querySelectorAll('input, textarea, select').forEach(element => {
        element.addEventListener('input', checkFormValidity);
    });
});
