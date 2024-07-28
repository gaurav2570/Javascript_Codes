//Create a game you start with any random game number .Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;
let getNum;

getNum = prompt("Enter the Game Number : ");

while(getNum != gameNum)
{
    getNum = prompt("You entered worng Number : ");
}

console.log("Congratulation, you entered the right number");