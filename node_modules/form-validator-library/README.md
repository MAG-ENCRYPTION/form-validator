# Form Validator
#### Form Validator is a lightweight JavaScript library for form verification.

## Installation
#### You can install the Form Validator via npm by using the following command:
```cmd
npm install form-validator-library
```
# Description
### We have three fonction in the object
#### 1- isFieldEmpty : it takes a string as parameter and return a boolean
#### 2- isValidEmail : it takes a string as parameter and return a boolean (Checks if an email address is valid)
#### 3- isStrongPassword : it takes a string as parameter and return a boolean (verify if the password has at least 8 characters, with at least one lowercase letter, one uppercase letter, one digit, and one special character)

## Usage
### Usage for back-end api
#### To use the Form Validator, you need to import it into your project:
```javascript
const FormValidator = require('form-validator-library');
```
#### Next, you can use it like this:
```javascript
const email = "test@example.com";
const password = "Password123!";

console.log(FormValidator.isFieldEmpty(email)) // result will be : true
console.log(FormValidator.isValidEmail(email)) // result will be : true
console.log(FormValidator.isStrongPassword(password)) // result will be : true
```

### Usage for front-end with html
#### You can follow these steps
#### 1- Install Webpack and its related dependencies in your project by running the following command in your terminal:
```shell
npm install webpack webpack-cli --save-dev
```
#### 2- In your JavaScript code, import and use the library. For example:
```javascript
const FormValidator = require('form-validator-library');
// Use the library
```
#### 3- Create a Webpack configuration file named webpack.config.js at the root of your project. Open webpack.config.js with a text editor and configure it to transpile and bundle your JavaScript code. Here's a basic example:
```javascript
const path = require('path');

module.exports = {
  entry: './your-entry-file.js', // Replace with the path to your JavaScript entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Replace with the desired output folder for the bundle
  },
};
```
#### 4- Build your JavaScript bundle using Webpack by running the following command in your terminal:
```shell
npx webpack --config webpack.config.js
```
#### Webpack will transpile your JavaScript code, bundle it with the npm library you imported, and generate a bundled JavaScript file (e.g., bundle.js) in the specified output folder.

#### 5- Create HTML file and Inside the HTML file, add the following script tag to include the bundle.js file:
```script
<script src="path/to/bundle.js"></script> <!-- Remplace with path of bundle.js -->
```
## Contributions
You are invited to contribute to the Form Validator library! Feel free to submit a pull request if you wish to enhance the library by making improvements, fixing bugs, or adding new features. Your valuable contributions will be highly appreciated and will benefit all users.

## License
#### The Form Validator library is licensed under the MIT License. Please see the LICENSE file for more information.
