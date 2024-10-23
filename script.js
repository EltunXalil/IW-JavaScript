// script.js

document.getElementById('checkinForm').addEventListener('submit', function (event) {
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const flightNumber = document.getElementById('flightNumber').value.trim();
    const seat = document.getElementById('seat').value;
  
    // Basic validation checks
    if (name === "") {
      alert("Please enter your name.");
      event.preventDefault(); // Stop form submission
    } else if (flightNumber === "") {
      alert("Please enter your flight number.");
      event.preventDefault();
    } else if (seat === "") {
      alert("Please select a seat.");
      event.preventDefault();
    } else {
      alert("Check-in successful!");
    }
  });
  