//Write a code which can give grades to student according to their scores
//90-100 A
//80-89 B
//70-79 C
//60-69 D
//0-49 F


let marks;
marks = prompt("Enter your Marks : ");

if(marks >= 90 && marks <= 100)
{
    console.log("You Pass With A Grade");
}
else if(marks >= 80 && marks <= 89)
{
    console.log("You Pass With B Grade");
}
else if(marks >= 70 && marks <= 79)
{
    console.log("You Pass With C Grade");
}
else if(marks >= 60 && marks <= 69)
{
    console.log("You Pass With D Grade");
}
else if(marks >= 35 && marks <= 59)
{
    console.log("You Pass");
}
else
{
    console.log("Your Fail");
}