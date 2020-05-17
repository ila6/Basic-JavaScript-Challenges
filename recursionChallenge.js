/* Write a recursive function, sum(arr, n), that takes an array and a value. Function
returns the sum of the first n elemnt of an array 'arr'
example: 
sum([1],0) should return 0 
sum([2,3,4],1) as first elemts is 2 and sum of only 2 is 2
sum([2,3,4,5],3) should be 9 as 2+3+4 is 9 first three elements*/

function sum(arr,n){
    if(n<=0){
        return 0; //first condition 
    } else{
        return sum(arr, n-1)+arr[n-1]; // arr[n-1] because array indexing is from 0 when each is calculated, function will called till edge condition n<=0.
    }
}