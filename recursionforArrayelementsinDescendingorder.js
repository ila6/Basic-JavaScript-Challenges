/* Your function must use recursion and by calling itself it should return an array with elements
in descending order so if n=5, then array should be [5,4,3,2,1].*/

function countdown(n){
    if(n<1){
        return [];
    }
    else{
        const countArray = countdown(n-1); // if n = 5 then it will become 4 and store in countArray .. the what about 5?
        countArray.unshift(n); // this will add 5 as first element using unshift method so countArray = [5,4] this will repeat till n<1 edge condition.
        return countArray;
    }
}