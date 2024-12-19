document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the value from the text box
    const userInput = document.getElementById('userInput').value;

    // Display a response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you for your feedback
    CAN YOU PLEASE TAKE A MOMENT TO RATE US ${userInput}`;

    document.getElementById('userInput').value = '';
});