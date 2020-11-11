// This is a normal function
/*
const buttonEl = document.getElementById('my-button');

const clickHandler = function() {
    let count = parseInt(this.getAttribute('data-count'));
    count++;

    this.setAttribute('data-count', count);
    this.textContent = `Clicks: ${count}`;
};

buttonEl.addEventListener('click', clickHandler);
*/


// Closure, this function is for my-button
const buttonEl = document.getElementById('my-button');

const clickHandler = function() {
    let count = 0

    return function() {
        count++;
        this.textContent = `Clicks: ${count}`
    };
};

buttonEl.addEventListener('click', clickHandler());

// This is for the 5 buttons in the div #container
const containerEl = document.getElementById('container');

const clickHandler2 = function() {
    if (event.target.matches('button')) {
        event.target.textContent = 'Clicked!';
    }
};

containerEl.addEventListener('click', clickHandler2);