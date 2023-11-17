const FormValidator = require('form-validator-library');

    // var emailInput = document.querySelector("input[name='email']");
    // var passwordInput = document.querySelector("input[name='password']");
    var button = document.querySelector('button');
    //passwordInput = passwordInput.value;
    
    function handleClick() {

    var emailInput = document.querySelector("input[name='email']");
    var passwordInput = document.querySelector("input[name='password']");
      
      if (FormValidator.isValidEmail(emailInput.value)) {
        emailInput.style.borderColor = 'green'
      } else {
        emailInput.style.borderColor = 'red';
        emailInput.classList.add('shake-animation');
      }
    
      if (FormValidator.isStrongPassword(passwordInput.value)) {
        passwordInput.style.borderColor = 'green';
      } else {
        passwordInput.style.borderColor = 'red';
        passwordInput.classList.add('shake-animation');
      }
    
      if (FormValidator.isStrongPassword(passwordInput.value) && FormValidator.isValidEmail(emailInput.value) ) {
        alert('Formulaire envoyé avec succès !');
        // Ajoutez ici le code pour soumettre le formulaire ou effectuer d'autres actions
      }
      if (FormValidator.isFieldEmpty(passwordInput.value) && FormValidator.isFieldEmpty(emailInput.value)) {
        alert('CHAMPS VIDES !');
        // Ajoutez ici le code pour soumettre le formulaire ou effectuer d'autres actions
      }
    }
    
    button.addEventListener('click', handleClick);
  