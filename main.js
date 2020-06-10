const form = document.querySelector('.promo__form');
const mail = document.querySelector('.promo__form-input');

let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//listener
form.addEventListener('submit', function(event) {
    event.preventDefault();

    removeValidation();

    if (reg.test(mail.value) == false) {
       
       let errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = 'Please provide a valid email';
        form.parentElement.insertBefore(errorMessage, form.nextSibling);
        mail.classList.add('error-border');

    } else {
        //if all sucsses
        removeValidation();
        form.submit();
        mail.value = ' ';
    }
});

let removeValidation = function () {
    let errors = document.querySelectorAll('.error-message');

    for (let i = 0; i < errors.length; i++) {
        
        errors[i].remove();
    }
    mail.classList.remove('error-border');
}