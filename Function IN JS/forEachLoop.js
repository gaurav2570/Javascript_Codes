let arr = ['Gaurav','Sahil','Yash'];

arr.forEach (function printVal(val)
{
    console.log(val)
});

//for a given array of number print the aquare of each value using the forEach loop.

let arr1 = [1,2,3,4,5,6];

arr1.forEach(function printvalue(value)
{
    console.log(value*value);
})

//Map Method

let newArr = [1,2,3,4,5,6];

let Arr = newArr.map((val) =>
{
    return val;
})
//Filter method

let new1 = [1,2,3,4,5,6];

let evenNew= new1.filter((val) =>
{
    return val % 2 == 0;
});
console.log(evenNew);