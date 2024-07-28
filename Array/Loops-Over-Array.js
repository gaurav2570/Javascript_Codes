//For Loop
let student = ["Gaurav","Sahil","Yash","Nikhil","Bhushan","Nilesh","Varad"];

for(let i=0 ; i < student.length ; i++)
{
    console.log(student[i]);
}

//For-Of-Loop

for(let el of student)
{
    console.log("Student = ",el);
}

let cities = ["Mumbai","Pune","Delhi","Jalgaon","Nashik"];

for(let city of cities)
{
    console.log(city.toUpperCase());
}