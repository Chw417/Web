# Sports Center Website
# login page
This project implements a secure login page with validation features, styled using SASS/SCSS and enhanced with Bootstrap for responsive design. The webpage allows users to log in with their email and password, and includes error handling if the login credentials are incorrect or if the email doesn't match the expected domain (@northeastern.edu).

Features

SASS/SCSS Features Implemented:
Variables:
Defined key color variables for primary and secondary colors, text color, border radius, and padding to maintain consistency and ease of customization.
$primary-color, $secondary-color, $text-color, $border-radius, and $padding are used throughout the styles.
Mixins:
@mixin flex-center: A mixin used for centering elements both horizontally and vertically using Flexbox.
@mixin box-shadow: A reusable mixin for applying a subtle box-shadow effect to elements.
Functions:
@function darken-color: A custom function to darken a given color by a specified amount. This is used to create hover effects for buttons.
Placeholder Selectors:
%btn-style: A placeholder selector that contains the common button styling (padding, border-radius, etc.). This is extended by the .btn class for buttons.
Grid Layout:
Used CSS Grid to structure the layout of the container, header, footer, and the login form. The grid provides a responsive design that adapts well to different screen sizes.
Extending and Nesting:
Utilized @extend to reuse button styles and applied &:hover for creating button hover states.
Nested styles in SCSS for better organization and readability, especially in the .btn and .error-message classes.
Global Styles
Font: The body uses Arial, sans-serif as the primary font.
Background: The background has a subtle color and a background image (1.jpg) applied using background-size: cover and background-position: center center.
Button Styles: Buttons have a base style defined by %btn-style and are enhanced with hover effects using the darken-color function.
Error Message Styling: Error messages are styled with red color and a smaller font size to provide clear feedback to the user during login validation.
JavaScript Features
Email Validation: The email entered by the user is validated against the pattern @northeastern.edu using a regular expression. If the email doesn't match, an error message is displayed.
File Reading: The data.txt file is read to check if the entered email and password match any credentials stored in the file. If valid, the user is redirected to the homepage; otherwise, an error message is shown.
Instructions for Setting Up and Running the Project

Prerequisites
Bootstrap: The project uses Bootstrap 5 for responsive design. Bootstrap is included through a CDN in the HTML file.
SASS/SCSS Compiler: You need to have a SASS compiler to convert SCSS files into regular CSS. You can use tools like Node-SASS or Dart-Sass.

## homepage
## Overview
This is a Sports Center website built using HTML, CSS, JavaScript, and Bootstrap. It includes a variety of pages to showcase sports equipment, an inquiry form, and contact information. The website also features a responsive carousel and navigation bar for a better user experience. The project uses SASS/SCSS to enhance the styling of the website with advanced CSS techniques such as Grid, Flexbox, and media queries.

## SASS/SCSS Features Implemented

### 1. **Responsive Typography with SCSS Mixins:**
   - SCSS mixins were used to create responsive typography for headings and text, which adapts based on viewport width.
   - A mixin called `responsive-font-size()` was used to dynamically adjust the font size of elements like headings according to the screen width. This ensures readability on all screen sizes.

### 2. **CSS Grid and Flexbox Layouts:**
   - **CSS Grid** was used for the overall page layout to create a flexible and responsive grid system.
   - **Flexbox** was employed in the navigation bar and other sections to ensure the layout adjusts properly across various screen sizes.
   - The page layout is divided into sections that adapt to both larger desktop and smaller mobile views using `flex` properties.

### 3. **SASS Variables and Nesting:**
   - SASS variables were defined for colors, fonts, and breakpoints, making it easier to adjust the website’s theme or modify it in the future.
   - SCSS nesting was used to maintain an organized structure in the stylesheet, making it easier to follow and modify individual components like `.header-container`, `.content`, and `.image-row`.

### 4. **Media Queries for Responsiveness:**
   - Media queries were implemented to ensure that the website is responsive on various devices.
   - Specific styles were applied for mobile, tablet, and desktop screens, such as adjusting font sizes, grid layouts, and image sizes.

### 5. **Hover Effects Using SASS:**
   - Interactive hover effects were added to the images and buttons, utilizing SASS to streamline the CSS code and ensure maintainability.
   - These hover effects were added to elements such as images in the equipment list and links in the navigation bar.

SASS/SCSS Features
Variables：
$primary-color: rgb(57, 167, 241);
$secondary-color: rgb(136, 3, 3);
$font-size-large: 120%;

Nesting
.header-container {
    background-color: black;
    .header {
        color: white;
        text-align: center;
    }
}

 Mixins
 @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    border-radius: $radius;
}

.button {
    @include border-radius(5px);
    background-color: $primary-color;
}

 Partials and Import
 @import 'variables';
body {
    font-size: $font-size-large;
    background-color: $primary-color;
}

Extend/Inheritance
.base-button {
    padding: 10px;
    background-color: $primary-color;
    border: none;
    border-radius: 5px;
}

.submit-button {
    @extend .base-button;
    background-color: $secondary-color;
}

Loops (for, each, while)
$colors: red, green, blue;

@each $color in $colors {
    .#{$color}-text {
        color: $color;
    }
}

Operators
$base-padding: 10px;
.container {
    padding: $base-padding * 2;
}

## Instructions for Setting Up and Running the Project

### Prerequisites:
- **Node.js and npm**: Ensure that Node.js and npm are installed on your machine.
  - To check if Node.js and npm are installed, run the following commands in the terminal:
    ```bash
    node -v
    npm -v
    ```
  - If not installed, download Node.js from [nodejs.org](https://nodejs.org/) and install it.

### 1. **Clone the Repository:**
   - Clone this repository to your local machine:
     ```bash
     git clone <repository-url>
     cd Sports-Center-Website
     ```

### 2. **Install Dependencies:**
   - In the project directory, run the following command to install all necessary dependencies (including SASS compiler):
     ```bash
     npm install
     ```

### 3. **Compile SASS/SCSS to CSS:**
   - Run the following command to compile your SCSS files into CSS:
     ```bash
     npm run sass
     ```
   - This will watch for changes in your `.scss` files and compile them into a `.css` file automatically.

### 4. **Running the Project Locally:**
   - Open the `index.html` file in your preferred browser to view the website. You can double-click the `index.html` file or open it through the browser’s "Open File" option.
   - The website should load with responsive layouts and all functionality as expected.

### 5. **Serving the Project (Optional):**
   - If you'd like to serve the project locally on a development server for testing purposes, use the following command:
     ```bash
     npm run serve
     ```
   - This will start a local server on `http://localhost:3000` where you can view the site.

### 6. **Modifications and Customization:**
   - You can modify the SASS variables for colors, fonts, and breakpoints to fit your own design preferences.
   - To add more equipment or content, simply update the HTML files in the `index.html` and add new items to the appropriate sections.

## Conclusion
This project demonstrates a fully responsive sports center website built using modern web technologies such as HTML5, CSS3, JavaScript, and SASS/SCSS. The usage of SASS/SCSS allows for a more maintainable and flexible styling system, providing powerful features like variables, mixins, and nesting that streamline the development process.
