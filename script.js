// script.js
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    const dob = document.getElementById("dob").value;

    // Basic validation
    if (!name || !email || !phone || !course || !dob) {
        alert("Please fill out all fields.");
        return;
    }

    // Display submitted data
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h3>Registration Successful!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
    `;
    document.getElementById("registrationForm").reset(); // Clear the form
});
