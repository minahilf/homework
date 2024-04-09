"use strict";
function ticketPrice(age) {
    if (age >= 40) {
        console.log("Your ticket price is Rs 100");
    }
    else if (age >= 31 && age <= 39) {
        console.log("Your ticket price is Rs 75");
    }
    else if (age >= 21 && age <= 30) {
        console.log("Your ticket price is Rs 50");
    }
    else if (age >= 11 && age <= 20) {
        console.log("Your ticket price is Rs 20");
    }
    else {
        console.log("You are free!!!");
    }
}
ticketPrice(56);
ticketPrice(38);
ticketPrice(25);
ticketPrice(18);
ticketPrice(8);
