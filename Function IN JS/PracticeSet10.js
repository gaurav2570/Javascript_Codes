//Create a function using the "Function" keyword that takes a string as an argument & 
//returns the number of vowels in the string

function countvowels (str)
{
    let count = 0;
    for(const char of str)
    {
        if(char == "a"||char == "e"||char == "i"||char == "o"||char == "u");
        {
            count++;
        }
    }
    console.log(count);
}