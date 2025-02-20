1# Login Page - README

## Description
This project is a simple login page designed for Northeastern University students. The form includes email, username, password, and password confirmation fields, with validation rules implemented using jQuery. Upon successful validation, the user is redirected to `calculator.html` with the username passed as a query parameter.

## Tags Used

### HTML Tags:
- `<!DOCTYPE html>` - Defines the document type and version.
- `<html lang="en">` - Specifies the language as English.
- `<head>` - Contains metadata and links to external resources.
- `<meta charset="UTF-8">` - Sets the character encoding.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` - Ensures responsive design.
- `<title>` - Defines the title of the document.
- `<script>` - Includes jQuery for form validation.
- `<style>` - Defines CSS styling within the document.
- `<body>` - Contains the main content of the page.
- `<div class="container">` - Wraps the login form.
- `<h2>` - Displays the page heading.
- `<form id="loginForm">` - Defines the login form.
- `<label>` - Defines labels for input fields.
- `<input>` - Defines input fields for email, username, and password.
- `<div class="error">` - Displays error messages for validation.
- `<button>` - Defines the login button.

### CSS Properties:
- `font-family` - Sets the font type.
- `background-color` - Defines background colors.
- `display`, `justify-content`, `align-items` - Used for layout styling.
- `border-radius`, `box-shadow` - Enhances UI with smooth edges and shadows.
- `padding`, `margin`, `width` - Controls spacing and layout.
- `cursor`, `color`, `hover effects` - Enhances button interactivity.

### JavaScript (jQuery):
- `$(document).ready()` - Ensures the script runs after page load.
- `validateEmail()`, `validateUsername()`, `validatePassword()` - Functions for form validation.
- `.on("input", function() {...})` - Enables real-time validation.
- `.prop("disabled", true/false)` - Enables/disables the login button.
- `window.location.href` - Redirects to another page upon successful login.

## Features
- Email validation (only `@northeastern.edu` allowed)
- Username validation (3-15 characters, no numbers or special characters)
- Password validation (6-18 characters, matching confirmation field)
- Live validation with error messages
- Redirection to `calculator.html` upon successful login

## Requirements
- Internet connection for jQuery (CDN used: `https://code.jquery.com/jquery-3.6.0.min.js`)
- Browser support for JavaScript and CSS

## Usage
1. Open `index.html` in a browser.
2. Enter a valid Northeastern email, username, and password.
3. Ensure all fields are correctly validated.
4. Click "Login" to proceed to the `calculator.html` page.

# Calculator Page - README

## Description
This project is a simple web-based calculator that allows users to perform basic arithmetic operations (Addition, Subtraction, Multiplication, and Division). The page retrieves the username from the URL query string and displays it as a personalized greeting.

## Tags Used

### HTML Tags:
- `<!DOCTYPE html>` - Declares the document type and version.
- `<html lang="en">` - Defines the document language as English.
- `<head>` - Contains metadata and linked resources.
- `<meta charset="UTF-8">` - Sets character encoding.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` - Ensures responsive design.
- `<title>` - Defines the title of the page.
- `<script>` - Includes jQuery for interactivity.
- `<style>` - Defines CSS styles for the page.
- `<body>` - Contains the main content of the page.
- `<div class="calculator-container">` - Wraps the calculator UI.
- `<h2>` - Displays the welcome message.
- `<span id="usernameDisplay">` - Displays the username from the URL.
- `<label>` - Defines labels for input fields.
- `<input type="number">` - Defines input fields for numerical values.
- `<div class="error">` - Displays error messages for invalid input.
- `<button>` - Defines calculator operation buttons.
- `<div class="result-container">` - Wraps the result section.
- `<h3>` - Displays the result label.
- `<input type="text" id="result" readonly>` - Displays the calculation result.

### CSS Properties:
- `font-family` - Sets the font style.
- `background-color` - Defines background color for elements.
- `display`, `justify-content`, `align-items` - Used for flexbox layout.
- `border-radius`, `box-shadow` - Provides rounded edges and shadow effects.
- `padding`, `margin`, `width` - Defines spacing and layout structure.
- `cursor`, `color`, `hover effects` - Enhances button interactivity.

### JavaScript (jQuery):
- `$(document).ready()` - Ensures the script runs after page load.
- `new URLSearchParams(window.location.search).get('username')` - Retrieves username from URL.
- `.on("input", function() {...})` - Ensures inputs only accept valid numbers.
- `calculate(operation)` - Performs the selected arithmetic operation.
- `.click((event) => {...})` - Detects button clicks and triggers calculations.
- `.val()` - Retrieves and sets input values.
- `.text()` - Updates error messages dynamically.

## Features
- Displays username retrieved from the URL.
- Supports basic arithmetic operations: Addition, Subtraction, Multiplication, Division.
- Ensures inputs are valid numbers and prevents division by zero.
- Provides real-time validation with error messages.
- Displays calculation results dynamically.

## Requirements
- Internet connection for jQuery (CDN used: `https://code.jquery.com/jquery-3.6.0.min.js`)
- Browser support for JavaScript and CSS

## Usage
1. Open `calculator.html` in a browser.
2. Ensure the URL contains a `username` query parameter (e.g., `calculator.html?username=JohnDoe`).
3. Enter numbers in the input fields.
4. Click on operation buttons to perform calculations.
5. View the result in the result field.

# Stopwatch Web Application

## Description
This is a simple stopwatch web application built using HTML, CSS, JavaScript, and jQuery. The application allows users to start, stop, and reset a stopwatch while displaying the elapsed time in hours, minutes, and seconds. It also includes a date picker for selecting a date.

## Features
- Start, Stop, and Reset functionality for the stopwatch.
- Display time in HH:MM:SS format.
- Date picker to select a date.
- User-friendly interface with interactive buttons.
- Responsive design with CSS styling.

## Technologies Used
- HTML
- CSS
- JavaScript
- jQuery

## HTML Tags Used
- `<!DOCTYPE html>`: Defines the document type and version.
- `<html lang="en">`: Specifies the language as English.
- `<head>`: Contains metadata and linked resources.
  - `<meta charset="UTF-8">`: Specifies the character encoding as UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures responsiveness.
  - `<title>`: Sets the title of the webpage.
  - `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`: Imports jQuery library.
- `<style>`: Defines CSS styles for layout and design.
- `<body>`: Contains the main content of the webpage.
- `<div class="container">`: Wrapper for the stopwatch UI.
- `<h2>`: Displays the title "Simple Stopwatch".
- `<label>`: Provides labels for input fields.
- `<input type="date">`: Allows users to select a date.
- `<div id="timeDisplay">`: Displays the stopwatch time.
- `<div class="button-container">`: Wraps the stopwatch control buttons.
- `<button>`: Represents the Start, Stop, and Reset buttons.
- `<script>`: Contains the JavaScript logic for stopwatch functionality.

## JavaScript Functionalities
- `startStopwatch()`: Starts the stopwatch and updates the time every second.
- `stopStopwatch()`: Stops the running stopwatch.
- `resetStopwatch()`: Resets the stopwatch back to 00:00:00.
- `updateDisplay()`: Updates the time display dynamically.
- jQuery is used for event handling and element selection.

## Usage
1. Open the `index.html` file in a web browser.
2. Select a date (optional).
3. Click the "Start" button to begin the stopwatch.
4. Click the "Stop" button to pause the stopwatch.
5. Click the "Reset" button to reset the stopwatch to 00:00:00.

## Author
Developed as a simple web-based stopwatch using HTML, CSS, and jQuery.

