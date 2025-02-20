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

# Simple Stopwatch Web Application

## Description
This is a simple stopwatch web application built using HTML, CSS, JavaScript, and jQuery. It allows users to start, stop, and reset a stopwatch. The application utilizes modern JavaScript features like async/await, Promises, setInterval, and clearInterval to manage the timing functions efficiently.

## Tags Used

### HTML Tags:
- `<!DOCTYPE html>`: Defines the document type and version.
- `<html>`: The root element of the HTML document.
- `<head>`: Contains meta-information about the document.
- `<meta>`: Specifies metadata (charset and viewport settings).
- `<title>`: Sets the title of the webpage.
- `<script>`: Includes external JavaScript (jQuery) and internal script logic.
- `<style>`: Defines internal CSS styles.
- `<body>`: Contains the content of the webpage.
- `<div>`: Used for structuring elements.
- `<h2>`: Defines a heading.
- `<label>`: Provides labels for form elements.
- `<input>`: Allows users to select a date.
- `<button>`: Triggers stopwatch actions.

### CSS Properties:
- `font-family`: Sets the font style.
- `background-color`: Defines the background color.
- `display`, `justify-content`, `align-items`: Used for flexbox styling.
- `height`, `width`, `margin`, `padding`: Controls the layout.
- `border-radius`: Adds rounded corners.
- `box-shadow`: Adds a shadow effect.
- `color`: Changes text color.
- `font-size`, `font-weight`: Adjusts text appearance.
- `cursor`: Changes cursor type.
- `transition`: Adds smooth effects.
- `gap`: Defines spacing between buttons.

### JavaScript Functions:
- `async/await`: Ensures the stopwatch runs asynchronously.
- `Promise`: Manages execution control.
- `setInterval`: Handles stopwatch time increments.
- `clearInterval`: Stops the stopwatch.
- `isRunning`: Tracks stopwatch state.
- `updateDisplay()`: Updates the displayed time.
- `startStopwatch()`: Starts the stopwatch asynchronously.
- `stopStopwatch()`: Stops the running stopwatch.
- `resetStopwatch()`: Resets the timer to 00:00:00.
- `prop()`: Enables/disables buttons dynamically.
- `click()`: Binds event listeners to buttons.

## How to Use
1. Open the `index.html` file in a browser.
2. Click **Start** to begin the stopwatch.
3. Click **Stop** to pause the stopwatch.
4. Click **Reset** to reset the time to 00:00:00.
5. Optionally, select a date using the date picker (not directly connected to the stopwatch functionality).

## Requirements
- A modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (for loading jQuery)

## Future Enhancements
- Add lap timing functionality.
- Save stopwatch state using localStorage.
- Add a countdown timer mode.

