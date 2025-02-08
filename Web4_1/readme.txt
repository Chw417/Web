Feedback Form README

Overview

This project implements a feedback form with various fields that require user input and validation. The form dynamically adjusts based on user selections, and real-time error handling ensures the form cannot be submitted until all fields are filled out correctly.

Tags and Descriptions

<html>
Description: Defines the root of an HTML document. All content in the file is enclosed within this tag.
<head>
Description: Contains meta-information about the HTML document like the title, linked CSS files, and other resources.
<title>
Description: Sets the title of the HTML document, which appears in the browser tab.
<link>
Description: Links an external resource like a CSS file to the HTML document. In this case, it links to style.css.
<body>
Description: Contains the body of the HTML document. This is where the visible content of the webpage goes.
<div>
Description: A container element used to group and structure content. The id="container" wraps the entire form to provide styling and layout.
<main>
Description: Represents the main content of the document, used to highlight the primary content of the page. In this case, it holds the entire feedback form.
<h2> and <h3>
Description: Headings that define the title and subtitle of the form. <h2> is the primary heading, while <h3> is a secondary heading.
<form>
Description: Represents a form for collecting user input. The id="feedbackForm" is used to reference the form in the JavaScript for validation and submission.
<label>
Description: Specifies labels for form elements. Labels are used for accessibility, and they make the form more user-friendly by providing context for each input.
<input>
Description: Defines an interactive form control used to collect data from users. Multiple types of inputs are used, including:
text: For text input (e.g., name fields).
radio: For selecting a single option from a group (e.g., title options).
email: For email input.
tel: For phone number input.
checkbox: For selecting one or more options.
submit: For submitting the form.
reset: For resetting the form to its initial state.
<select>
Description: Defines a dropdown menu where users can select an option. In this case, it's used to choose an item from a list (Coke, Tea, Pizza, etc.).
<option>
Description: Defines options inside a dropdown menu. Each <option> represents a selectable choice in the <select> dropdown.
<textarea>
Description: Allows users to input multi-line text, such as comments or feedback. This is used for the "Comments" field in the form.
<span>
Description: A generic inline container used to style or display content. It is used here to display error messages next to form fields if validation fails.
<br>
Description: Inserts a line break, used to separate elements vertically for better layout.
<table>
Description: Defines a table structure for displaying data. This is used to show the submitted form data after the user submits the form.
<th> and <td>
Description: Defines table headers (<th>) and table data cells (<td>) used inside a <table> element to display the form data.
<script>
Description: Defines JavaScript that is used for the form's dynamic behavior, including validation, showing and hiding the input fields, and submitting the form. This links to the external script.js file.
Features

Dynamic Fields: When an item is selected from the dropdown, a text field appears to allow the user to enter additional information. This input field is only required if the corresponding checkbox is checked.
Real-Time Validation: Each input field is validated as the user types, and error messages appear next to invalid fields.
Phone Number Formatting: The phone number input field automatically formats the entered number to a specific format.
Character Limit: The second address field (Street Address 2) has a character limit counter that updates as the user types.
Files Included

index.html: The main HTML document containing the structure of the form.
style.css: The external CSS file used to style the form and handle error messages.
script.js: The external JavaScript file that controls the form behavior, including dynamic fields and validation.
How to Use

Features:

Dynamic Input Fields: A section where users can choose from a list of items (e.g., Coke, Tea, Pizza). If a user selects an item, an additional input field appears where they can provide further details. This field is only required if the item is selected.
Phone Number Formatting: The phone number input field automatically formats the user's input into the format (XXX) XXX-XXXX.
Field Validations: The form validates required fields such as:
Title (Miss, Mr, Mrs)
First Name (2-50 characters, alphabetic)
Last Name (2-50 characters, alphabetic)
Email (only @northeastern.edu domain is allowed)
Phone Number (valid phone format)
Zipcode (5 digits)
Street Address 1 (5-100 characters)
Comments (10-500 characters)
"How did you hear" (at least one source selected)
Any invalid input displays an error message next to the corresponding field.
Character Count: The Street Address 2 field has a character counter that updates as the user types.
Form Submission: Upon submission, the form data is displayed in a table format. The form also resets after submission, clearing all fields.
Instructions

Requirements
HTML & JavaScript: This project is built using HTML for the structure and JavaScript for the form validation, dynamic functionality, and event handling.
CSS: Ensure you have a style.css file in your project directory to style the form and error messages.
How to Use
Opening the Form:
Open the index.html file in a web browser to see the feedback form.
Filling out the Form:
Select a title (Miss, Mr, Mrs).
Fill in your first name, last name, email, phone number, and zip code.
If you select an item from the "Select an item" dropdown (e.g., Coke, Tea), an input field will appear where you can enter additional details.
You can enter your street address, and the second street address field is optional.
Provide your comments (10-500 characters).
Select at least one checkbox for "How did you hear" (Facebook, Google, or Yelp).
Validating the Form:
As you fill out the form, the fields will be validated in real time. Error messages will appear for any invalid or missing fields.
Submitting the Form:
When the form is valid (all required fields are filled correctly), the "Submit" button will be enabled. Clicking "Submit" will show a table with your form data.
After submitting, the form will reset, and the dynamic input fields will be cleared.
Resetting the Form:
You can click the "Reset" button to clear all fields and start over.
Files Included
index.html: The main HTML file containing the structure of the feedback form.
style.css: The CSS file for styling the feedback form and error messages.
script.js: The JavaScript file handling dynamic input, form validation, and submission behavior.
Example Usage

Selecting an Item and Entering Additional Details:
Choose "Coke" from the dropdown. A text field will appear where you can enter further details about your Coke choice.
If the text field is not filled out while the checkbox is selected, an error will appear stating "This field is required."
Validating Form Fields:
The form will display error messages for any invalid fields (e.g., invalid phone number format, missing title, etc.) in real-time.
The "Submit" button will be disabled until all required fields are filled out correctly.
Development Notes

The form uses JavaScript event listeners to handle user input and validate fields as they are filled out.
The submit event prevents the default form submission behavior to display the data in a table format instead.
The form has built-in error handling, ensuring the user cannot submit the form with incomplete or invalid data.