// Main JavaScript functionality

// Function to get and display the current date and time in UTC
function displayCurrentDateTime() {
    const currentDateTime = new Date();
    const utcDateTime = currentDateTime.toUTCString();
    console.log(`Current Date and Time (UTC): ${utcDateTime}`);
}

displayCurrentDateTime();
