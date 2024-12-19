const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value,
    };

    try {
        // Send the data using Fetch API
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            popup.textContent = "Email sent successfully!";
            popup.style.backgroundColor = "#d4edda"; // Green background

            // Clear the form
            contactForm.reset();
        } else {
            popup.textContent = "Failed to send email. Please try again.";
            popup.style.backgroundColor = "#f8d7da"; // Red background
        }

        popup.classList.add("show");

        // Hide the popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    } catch (error) {
        popup.textContent = "An error occurred. Please try again.";
        popup.style.backgroundColor = "#f8d7da"; // Red background
        popup.classList.add("show");

        // Hide the popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
        console.error("Error submitting the form:", error);
    }
});
