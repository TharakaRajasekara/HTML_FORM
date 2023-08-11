document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // You can add your own code here to handle form submission
        // For example, you could use fetch() to send the form data to a server
        // and display a success message to the user.
        
        alert("Form submitted successfully!");
        form.reset();
    });
});
