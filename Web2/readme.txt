Personal Profile Website

Introduced my academic background, research experience, articles, awards, and the parts I was interested in. And provided contact information and user inquiries. All of these are conducive to my progress.

This website showcases a personal profile, including sections on profile details, experience, inquiries, and contact information. The webpage is designed to display structured content using HTML, CSS, and JavaScript.

Tags Used

<html>
Defines the HTML document structure.

<head>
Contains metadata for the document, such as charset, viewport settings, title, and links to external resources.

<meta charset="UTF-8">: Specifies the character encoding for the webpage.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Ensures proper scaling on different devices.
<title>: Sets the title of the webpage displayed in the browser tab.
<link rel="icon" href="3.jpg" type="image/jp">: Sets the favicon for the website.
<link rel="stylesheet" href="styles.css">: Links to the external CSS file for styling.
<script>: Contains JavaScript code that is executed when the page loads.
<body>
Contains the content visible to the users.

<h1 class="header">: Defines the main header of the page.
<p class="background-text">: Paragraph tag used for profile and background details.
<hr>: Horizontal rule to separate content visually.
<div class="page">: Contains the main page structure.
<header>: Defines the header section of the page.
<aside class="aside">: Sidebar navigation with links to different content sections.
<main class="main">: Main content area of the webpage.
<ul>, <li>, <a>
<ul>: Unordered list, used for navigation links.
<li>: List item that contains individual links to different sections (Profile, Experience, Inquiry, Contact Information).
<a href="#" onclick="showContent('contentX')">: Links that trigger JavaScript functions to display different sections on the page.
<div>
Used extensively to structure the content and apply styling. Each content section (content1, content2, content3, content4) is placed inside a <div> to manage visibility and layout.

<table>
Defines a table structure for displaying experience information dynamically.

<thead>: Table header, defining columns for name, address, and time.
<tbody>: Table body, where rows are dynamically added via JavaScript.
<tr>, <th>, <td>: Table row, table header cell, and table data cell, respectively.
<form>
Used for the inquiry form submission, which collects user data.

<input type="text">: Text input fields for user details like name, email, phone number.
<textarea>: A multi-line text input for additional messages.
<input type="submit">: A button to submit the form.
<footer>
Defines the footer content at the bottom of the page.

JavaScript Functions
showContent(id): JavaScript function that toggles between different content sections based on the ID passed.
renderTable(): Function to dynamically populate the experience table based on pre-defined data.
saveData(): Function to save the user's inquiry form data as a text file (data.txt).
External Resources
CSS styles are applied via styles.css.
Profile images and other assets such as 3.jpg, 4.jpg, 5.jpg, 6.jpg are referenced in the HTML code.
Description
This webpage serves as an interactive personal profile, allowing users to explore different sections such as:

Profile: Overview of the individual's background and skills.
Experience: Displays a table of professional experiences and awards.
Inquiry: A form where users can submit inquiries or messages.
Contact Information: Provides contact details such as address, phone number, email, and social media links.
The website employs JavaScript to handle dynamic content switching and form data saving. The CSS file handles the styling and layout, ensuring a responsive and clean user interface.