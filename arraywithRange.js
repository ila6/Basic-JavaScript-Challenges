/* write a function names as rangeOfNumbers(startNum, endNum) should return
and array of integers starting from StartNum and ending with endNum. 
The starting number will always always be less or equal to endNum.
*/

function rangeOfNumbers(startNum, endNum){
    if(endNum - startNum === 0){
        return[startNum]; // so if it is (4,4) then it should return either so we can say the starting number.
    }
    else{
        const arr = rangeOfNumbers(startNum, endNum - 1); // so if starting number is 3 and endNum is 8 then 3,7 and 8 is pushed at last using push method
        arr.push(endNum); //8 is pushed at the last and then keeps on happening till edge condition 3-3 return 3
        return arr; // so we finally get a range between start number and end number.
    }
}