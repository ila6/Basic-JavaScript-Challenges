/*
Modify the function checkObj to test if an object passed to the function(obj) contains a
specific property (checkProp). If the property is found return that property's value.
If not then return "Not Found". */

function checkObj(obj,checkProp){
    if(obj.hasOwnProperty(checkProp) == true){
        return obj[checkProp];
    }
    else {
        return "Not Found";
    }
}

checkObj();