'use strict';


// coding challenge 1

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    registerNewAnswer () {
        const ans = Number(prompt(`What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)`));
    
        ans < this.answers.length && this.answers[ans]++;

        this.displayResults();
        this.displayResults('string');
    },
}

poll.displayResults = function (type='array') {
    if (type == 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
        console.log(this.answers);
    }
}

document.querySelector('.showPoll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]} , 'string');
poll.displayResults.call({answers:  [1, 5, 3, 9, 6, 1]});



/////////////////////////////////////////
// Coding challenge 2

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function (){
        header.style.color = 'blue';
    });
})();


// IIFE is called at first and at that time eventListener is added 
// Even after the execution of IIFE inner function/method still have variable value that is assign to them in IIFE.