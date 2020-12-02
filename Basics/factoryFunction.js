const beverage = function() {
    // Create 3 variables for the `type`, `price`, and `origin` of the beverage
    const type = "energyDrink"
    const price = 1
    const origin = "somewhere"

    // Return an object literal which contains the methods `product()`, `amount()`, and `place()`
    return {
        // `product()` will print an invitation to drink the `type` of beverage
        product: function() {
            console.log(`Would you like a ${type}`)
        },
        //
        // `amount()` will print out the `price` of the beverage
        amount: function() {
            console.log(`The price of this ${type} is ${price}`)
        },
        //
        // `place()` will print out the `origin` of the beverage
        place: function() {
                console.log(`This ${type} is from ${origin}`)
            }
            //
    };
};

const drink = beverage();
// Invoke the 3 methods
drink.product();
drink.amount();
drink.place();