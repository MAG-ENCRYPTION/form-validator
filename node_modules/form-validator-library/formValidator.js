// Form Validation Library

const FormValidator = {
    // Checks if a field is empty
    isFieldEmpty: function (value) {
        return value.trim() === "";
    },

    // Checks if an email address is valid
    isValidEmail: function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
  
    // Checks if a password is strong enough
    isStrongPassword: function (password) {
    // At least 8 characters, with at least one lowercase letter, one uppercase letter, one digit, and one special character
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }
};
module.exports = FormValidator;