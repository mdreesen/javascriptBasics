// Lexical scoping or static scoping
// Global scope - defined outside of all code blocks
// Local scope - defined inside of the code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope
// Global scope (varOne)
// Local scope (varTwo)
varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);
};