// Populate date inside the div
const dateDiv = document.getElementById('date');
const currentDate = new Date();
dateDiv.innerText = `Today's date is: ${currentDate.toDateString()}`;

// Write a message to the console
console.log("Hello from JavaScript! The date has been set.");
