/* 
Convert the switch statement into an object called Lookup. Use it to look up val
that will be argument of the function and assign the associated string to the result
variable. Switch statement :

function phoneticLookup(val){
    var result = "";

    switch(val){
        case "aplha":
            result = "Adams";
            break;
        case "bravo":
            result: "Boston";
            break;
        case "Charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }
    return result;
}

phoneticLookup("Charlie"); */

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams";
        "bravo": "Boston";
        "charlie": "Chicago";
        "delta": "Denver";
        "echo":"Easy";
        "foxtrot": "Frank";
    };
    result = lookup[val];
    return result;
}
phoneticLookup("Charlie");