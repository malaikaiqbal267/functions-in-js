// Queston 1
//  Create a function called displayWelcomeMessage that prompts the user
//   to enter their name and then displays a personalized welcome message such as 
// "Welcome, [name]!" in an alert.

// function displayWelcomeMessage(name){
//     alert("Welcome,"+name);
// }
// displayWelcomeMessage('nimra')


// Question#2
// Create a function called generateQuote that randomly selects and returns a quote
//  from an array of predefined quotes. Call this function to display a random quote 
//  on the webpage.

// const quotes = [
//     "The only way to do great work is to love what you do",
//     "Code is like a humor When you have to explan it, its bad",
//     "Code is a Poetry written by logic",
//     "Programming is not about just typing, its about thinking",
//     "The best code is no code at all", ];
  
//   function generateQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
//   }
  
//   console.log(generateQuote());

//   Question#3
// Write a function called generateRandomNumber that generates and returns a random
//  number between 1 and 100. Call this function and display the generated random number on the webpage.

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNumber = generateRandomNumber();
console.log("Random Number: " + randomNumber);

