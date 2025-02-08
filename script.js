// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Ask for the user's name
    const userName = prompt("Hello! What's your name?");
    if (userName) {
        // Ask if they know Angshuman
        const knowsAngshuman = confirm(`Hi ${userName}, do you know Angshuman?`);
        const phoneNumberElement = document.getElementById("phone-number");

        // Show or hide the phone number based on their response
        if (knowsAngshuman) {
            phoneNumberElement.style.display = "inline-block"; // Show phone number
        } else {
            phoneNumberElement.style.display = "none"; // Hide phone number
        }
    }
});