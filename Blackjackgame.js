/*
Counting cards, In casino game Black Jack, a player can gain an advantage
over the house by keeping track of the relative number of High/Low cards
remaining in the deck. 

Having  more High cards remaining in the deck favors the players. Each card is assigned a value
according to the the table below. When the count is positive, the player should be high. When
the count is zero or negavtive, the player should be able to bet Low.

count       Cards
+1          2...6
0           7...9
-1          10, 'J','Q','K','A'.

You will write card counting function. It will recieve a card parameter, which can be a number
or a string, and increments and decrements global count and the String Bet if the count is positive 
and Hold if it is zero or negative. The current count and the player's decision(Bet/Hold) should be 
seperated by single space e.g : 5 Bet or -3 Hold.
*/

var count = 0;

function cc(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count;
        case 10:
        case 'J':
        case 'Q':
        case 'A':
            count--;
    }
    var betorhold ="";
    if (count>0){
        betorhold = "Bet";
    } else {
        betorhold = "Hold";
    }
    return count + " " + betorhold;
}

console.log(cc('J'));
