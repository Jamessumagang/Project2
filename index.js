function validateForm() {
    const name = document.forms["feedbackForm"]["name"].value;
    const email = document.forms["feedbackForm"]["email"].value;
    const comments = document.forms["feedbackForm"]["comments"].value;

    if (name.trim() === "" || !/[a-zA-Z]/.test(name)) {
        alert("Name must contain letters and cannot be empty or just spaces.");
        return false;
    }
    if (email === "") {
        alert("Email must be filled out.");
        return false;
    }
    if (comments === "") {
        alert("Comments must be filled out.");
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Thank you for your feedback!");
    return true; 
}