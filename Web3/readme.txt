Table Checklist Project

Overview

This project is a dynamic table checklist that allows users to add, delete, edit, and manage student award records. The table provides an interactive UI where users can expand details, select records, and submit selected awards.

Features

Display User Information on Page Load

The full name "Hongwei Chen" and NUID "002301480" are displayed when the page loads.

Dynamic Table Interaction

The table starts with a default student entry.

Clicking the arrow icon expands/collapses award details.

Adding New Students

Clicking the "ADD NEW STUDENT" button dynamically adds a new student with appropriate numbering.

A confirmation popup appears after successful addition.

The new student entries maintain sequential order, even after deletions.

Selecting Students

Checking a student's checkbox highlights the row in yellow.

The "SUBMIT SELECTED AWARDS" button is enabled and turns orange.

A "Delete" and "Edit" button are dynamically added to the row.

Deleting Students

Clicking the delete button removes the student record and corresponding details.

A confirmation popup appears displaying the deleted student's name.

Remaining students are renumbered sequentially.

Editing Students

Clicking the edit button opens a prompt where users can enter new information.

A confirmation message is displayed upon successful update.

Deselecting Students

Unchecking a checkbox removes the yellow highlight and hides the delete/edit buttons.

If no checkboxes are selected, the "SUBMIT SELECTED AWARDS" button is disabled.

How to Run

Ensure you have the following files in the same directory:

index.html (this file)

script.js (JavaScript logic for functionality)

table.css (styling for the table and buttons)

down.png (image used for expanding/collapsing award details)

Open index.html in a web browser.

Dependencies

Standard HTML, CSS, and JavaScript are used (No external libraries required).

Notes

The table ensures continuous numbering even after deletions.
