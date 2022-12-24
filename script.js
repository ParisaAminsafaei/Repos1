'use strict'

var phone_number = document.querySelector('#phone_number');

phone_number.addEventListener('input' , function() {
    if(phone_number.value.length < 11 || phone_number.value.length > 11) {
        phone_number.style.borderColor = 'red'
        phone_number.style.color = 'red'
    } else if(phone_number.value.length == '11') {
        phone_number.style.borderColor = 'green'
        phone_number.style.color = 'green'
    }
});

//===========================================================================

var button = document.querySelector('#button')

button.addEventListener('click' , function() {
    var value = document.querySelector('#phone_number');
    var error3 = document.querySelector('.error3');
    var error2 = document.querySelector('.error2');
    if(value.value == '') {
        error3.style.display = 'flex'
    } else if(value.value == '09365953491') {
        var error1 = document.querySelector('.error1')
        error1.style.display = 'flex'
        error2.style.display = 'none'
        error3.style.display = 'none'
    } else if(value.value != '09365953491') {
        error2.style.display = 'flex'
        error3.style.display = 'none'
    }

});