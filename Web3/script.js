alert("Full Name: Hongwei Chen, NUID: 002301480");
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#myTable tbody");
  const addBtn = document.getElementById("addBtn");
  const submitBtn = document.getElementById("submitBtn");
  let studentCount = 1;

  // On page load: disable submit and collapse rows
  const initializeTable = () => {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "gray";
  };

  initializeTable();

  // Add new student
  addBtn.addEventListener("click", () => {
    studentCount++;

    const row = document.createElement("tr");
    const detailsRow = document.createElement("tr");
    detailsRow.className = "details-row";
    detailsRow.style.display = "none";

    row.innerHTML = `
      <td>
        <input type="checkbox"><br><br>
        <img src="down.png" width="25px" class="toggle-btn">
      </td>
      <td>Student ${studentCount}</td>
      <td>Teacher ${studentCount}</td>
      <td>Approved</td>
      <td>Fall</td>
      <td>TA</td>
      <td>${10000 + studentCount}</td>
      <td>100%</td>
      <td></td>
      <td></td>
    `;

    detailsRow.innerHTML = `
      <td colspan="10">
        <strong>Advisor:</strong> Teacher ${studentCount}<br>
        <strong>Award Details:</strong> Full Scholarship<br>
        <strong>Semester:</strong> Fall<br>
        <strong>Budget Number:</strong> ${10000 + studentCount}<br>
        <strong>Comments:</strong> Excellent performance.
      </td>
    `;

    tableBody.appendChild(row);
    tableBody.appendChild(detailsRow);
    alert(`Student ${studentCount} Record added successfully`);

    addRowEventListeners(row, detailsRow);
  });

  // Add event listeners to each row
  const addRowEventListeners = (row, detailsRow) => {
    const checkbox = row.querySelector("input[type='checkbox']");
    const toggleBtn = row.querySelector(".toggle-btn");
    const deleteCell = row.children[8];
    const editCell = row.children[9];

    // Toggle row highlight and buttons on checkbox click
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        row.style.backgroundColor = "yellow";
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "orange";
        deleteCell.innerHTML = `<button class="delete-btn">Delete</button>`;
        editCell.innerHTML = `<button class="edit-btn">Edit</button>`;

// Add delete button functionality
deleteCell.querySelector(".delete-btn").addEventListener("click", () => {
  const studentName = row.children[1].innerText;
  tableBody.removeChild(row);
  tableBody.removeChild(detailsRow);
  alert(`${studentName} Record deleted successfully`);

  // 重新排序
  reorderTable();
});

        // Add edit button functionality
        editCell.querySelector(".edit-btn").addEventListener("click", () => {
          const studentName = row.children[1].innerText;
          const userInput = prompt(`Edit details of ${studentName}`, "");
          if (userInput) alert(`${studentName} data updated successfully`);
        });
      } else {
        row.style.backgroundColor = "white";
        deleteCell.innerHTML = "";
        editCell.innerHTML = "";
        if (!document.querySelector("input[type='checkbox']:checked")) {
          submitBtn.disabled = true;
          submitBtn.style.backgroundColor = "gray";
        }
      }
    });

    // Toggle award details on image click
    toggleBtn.addEventListener("click", () => {
      if (detailsRow.style.display === "none") {
        detailsRow.style.display = "table-row";
      } else {
        detailsRow.style.display = "none";
      }
    });
  };

// Reorder table rows after deletion
const reorderTable = () => {
  const rows = tableBody.querySelectorAll("tr:not(.details-row)");
  const detailsRows = tableBody.querySelectorAll(".details-row");
  studentCount = 0;

  rows.forEach((row, index) => {
    if (index % 1 === 0) { // 遍历每个数据行
      studentCount++;
      // 更新学生和教师信息
      row.children[1].innerText = `Student ${studentCount}`;
      row.children[2].innerText = `Teacher ${studentCount}`;

      // 更新对应的详情行内容
      const detailsRow = detailsRows[index];
      detailsRow.innerHTML = `
        <td colspan="10">
          <strong>Advisor:</strong> Teacher ${studentCount}<br>
          <strong>Award Details:</strong> Full Scholarship<br>
          <strong>Semester:</strong> Fall<br>
          <strong>Budget Number:</strong> ${10000 + studentCount}<br>
          <strong>Comments:</strong> Excellent performance.
        </td>
      `;
    }
  });
};

  // Add event listeners to existing rows
  const existingRows = tableBody.querySelectorAll("tr:not(.details-row)");
  const existingDetailsRows = tableBody.querySelectorAll(".details-row");
  existingRows.forEach((row, index) => addRowEventListeners(row, existingDetailsRows[index]));
});
