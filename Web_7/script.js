function showContent(id) {
    // 隐藏所有内容
    var contents = document.getElementById('main').children;
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    // 显示选中的内容
    document.getElementById(id).style.display = 'block';
}

        window.onload = function() {
        showContent('content1'); // 显示默认的欢迎页面内容
        renderTable(); // 初始化表格第一页数据
        };

        function saveData() {//链接数据
            // 获取表单数据
            const fname = document.getElementById("fname").value;
            const lname = document.getElementById("lname").value;
            const Phonenumber = document.getElementById("phone").value;
            const subject = document.getElementById("subject").value;

            // 格式化数据
            const data = `First Name: ${fname}\nLast Name: ${lname}\nPhonenumber: ${phone}\nSubject: ${subject}\n-------------------\n`;

            // 创建 Blob 对象
            const blob = new Blob([data], { type: "text/plain" });

            // 创建一个下载链接
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "data.txt"; // 文件名
            a.click();

            // 释放 URL 对象
            URL.revokeObjectURL(a.href);
        }