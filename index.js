// Write your code here!
// Remove the <main id="main"> element from the DOM
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element and assign it to the variable newHeader
const newHeader = document.createElement('h1');

// Set the id attribute of newHeader to 'victory'
newHeader.id = 'victory';

// Set the text content of newHeader
const yourName = 'John Doe'; // Replace with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append newHeader to the document body or any appropriate container
document.body.appendChild(newHeader);
