// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

 $(function(){
    mdc.textField.MDCTextField.attachTo(document.querySelector('.username'));
    mdc.textField.MDCTextField.attachTo(document.querySelector('.password'));
    mdc.ripple.MDCRipple.attachTo(document.querySelector('.cancel'));
    mdc.ripple.MDCRipple.attachTo(document.querySelector('.next'));
 });
