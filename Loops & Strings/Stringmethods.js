//String Method

let str3 = " Gaurav";
str3 = str3.toUpperCase();
console.log(str3);

let str4 = " Gaurav";
str4 = str4.toLowerCase();
console.log(str4);

//Removes white space

let name = "   Apna   Collage    js   ";
console.log(name);
console.log(name.trim());

//returns parts of String

let str = "Hellooo";
console.log(str.slice(0,4));

//Joins str2 with str1

let str1 = "Gaurav";
let str2 = "Mahajan";
let result = str1.concat(str2); //step1
console.log(result);

let ret = "I Am " + str1 + str2;
console.log(ret);

//Replace Method

let nstr = "hello";

let s = nstr.replace("h","H");
console.log(s);

// charAt Replace Method

let str5 = "IloveJs";
str5 = str5.replace("I","G")
console.log(str5);