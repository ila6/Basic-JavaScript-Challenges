/* Declare and initialize a variable 'total' to 0. Use a foor lop to add each value of
my Array elements and total should have sum of all the array elements*/

var myArray = [2,3,4,5,6];
var total = 0;
for(i=0;i<myArray.length;i++){
    total += myArray[i];
    console.log(total);
}