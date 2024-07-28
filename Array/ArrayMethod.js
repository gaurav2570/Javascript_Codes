//push method
let fooditem = ["apple","mango","litchi","graps","banana"];
fooditem.push("tomata");
console.log(fooditem);

//pop method
fooditem.pop(fooditem)
console.log(fooditem)

//To string method
let f = fooditem.toString();
console.log(f);

//concat method
let arr1 = ["G","S","Y","N","B"];
let arr2 = ["A","B","C","D","E"];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//unshift method
let arr4 = ["G","S","Y","N","B"];
arr4.unshift("D");
console.log(arr4);//Adding in Starting
//shift method
arr4.shift(); 
console.log("delete = ",arr4);//delete 1st element

//slice method
let arr5 = ["G","S","Y","N","B"];
console.log(arr5.slice(1,4));