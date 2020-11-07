/*
let temp = 150;

// logical and operator - True if both sides are true. False otherwise
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out!')
};

// Logical or operator - true if at least on side is true. False otherwise
if (temp <= 0 || temp >= 110) {
    console.log('do not go outside')
};
*/
//////////////////////////////////////////////////////////////////////////////////////////////////
// -=- Challenge -=-
// Are both Vegan? Only offer up vegan dishes
// At least one vegan? Make sure to offer up some vegan options
// Else, offer up anything on the menu
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('They are both vegan, serve them only vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Only one of the guests are vegan')
} else {
    console.log('Offer both guests anything on the menu');
}