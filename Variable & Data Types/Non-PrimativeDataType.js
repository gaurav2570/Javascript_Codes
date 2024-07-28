const Student ={
    fullName : "Gaurav Mahajan",
    age : 23,
    cgpa : 7.5,
    isPass : true
};  //Array
console.log(Student.age);
console.log(Student.cgpa);
console.log(Student.isPass);

Student.age = Student.age +1;
console.log(Student.age);

Student.fullName ="Sahil Mahajan";
console.log(Student.fullName);

function Hello(){
    console.log('I am Learning Javascript');
} //function

console.log(typeof Hello,Hello);