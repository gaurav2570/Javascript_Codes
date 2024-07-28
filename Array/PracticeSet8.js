//For a given array with marks of students -> [85,97,44,37,76,60]
//Find the average marks of the entire class

let student = [85,97,44,37,76,60];
let sum = 0;

for(let marks of student)
{
    sum += marks;
}
console.log(sum);

let avg = sum / student.length;
console.log('Avg marks of the class = ',avg);