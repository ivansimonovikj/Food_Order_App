/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function submitPayPalForm() {
    const paypalForm = document.querySelector('form[action*="paypal"]');
    if (paypalForm) {
        paypalForm.submit();
    } else {
        // Fallback logic to find PayPal form
        alert('Payment form not found. Please refresh the page and try again.');
    }
}