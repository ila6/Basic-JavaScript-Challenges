/* Change the while loop into dowhile loop so that the loop will push only the numer 10
to myArray and i will be 11*/

var myArray = [];
var i =10;

do{
    myArray.push(i);
    i++; //this will make it 11 
} while (i<10); //when it comes thisline the program fails as condintion is i<10 so final output will be 10;