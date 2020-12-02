function foo1() {
    return {
        bar: "hello"
    };
}

// This will return undefined because what is in the "{}" under the return statement is dead code.
function foo2() {
    return
    {
        bar: 'hello';
    };
}

console.log(foo1());
console.log(foo2());