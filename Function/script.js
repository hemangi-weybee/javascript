'use strict';

const bookings = [];

const newBooking = function(no, noPassenger=1, price=199) {

    const booking = {
        no, noPassenger, price
    };
    
    console.log(booking);
    bookings.push(booking);
}

newBooking('a');
newBooking('a',10);
newBooking('a',undefined,1000);


const flight = 'abc';
const user = {
    name: 'xyz',
    passport: 100100100,
};

const checkIn = function (flight, newUser) {
    flight = 'abcd';
    newUser.name = 'Mr.' + newUser.name;

    if(newUser.passport === 100100100)
        console.log('checked in');
    else
        console.log('Wrong Passport');
}

console.log(user);
checkIn(flight, user);
console.log(flight);

const newPass = function (u) {
    u.passport = Math.trunc(Math.random() * 100000000);
};

newPass(user);
console.log(user);
checkIn(flight,user);

//////////////////////////////////////////
//Callback Function

// console.clear();

const oneWord = function (str) {
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');    
}

const transformer = function(str, fn) {
    console.log(`Original: ${str}`);
    console.log(`Output: ${fn(str)}`);

    console.log(`Transformed By: ${fn.name}`);
}

transformer('Hello there!', upperFirstWord);
transformer('Hello World !', oneWord);

const high5 = function () {
    console.log('👋');
}

// document.body.addEventListener('click', high5);

// ['abc', 'xyz', 'pqr'].forEach(high5);


const greet = function(greetings) {
    return function (name) {
        console.log(`${greetings} ${name}`);
    }
}
greet('hello')('xyz');
const newGreet = greet('hloooooooo');
newGreet('ABC');
console.dir(newGreet);


const greetHii = greetings => name => console.log(`${greetings} ${name}`);

greetHii('hii')('xyz');
const newGreetHii = greetHii('hiiiiiiiiiii');
newGreetHii('ABC');
console.dir(newGreetHii);



//////////////////////////////////////////
// call, apply and bind


const flight1 = {
    airline: 'air1',
    iataCode: 'AL',
    bookings: [],

    book(flightNo, name) {
        console.log(`Booked on ${this.airline} flight ${flightNo}`);
        this.bookings.push({flight: `${this.iataCode}${flightNo}`, name});
    }
};

flight1.book(239, 'ABC');
flight1.book(635, 'XYZ');
console.log(flight1);

const airIndia = {
    airline: 'AirIndia',
    iataCode: 'IN',
    bookings: [],

    book(flightNo, name) {
        console.log(`Booked on ${this.airline} flight ${flightNo}`);
        this.bookings.push({flight: `${this.iataCode}${flightNo}`, name});
    }
};

const book = airIndia.book;

/////////////////////////////////////////
//apply method ----  But not used

const data = [525, 'New one'];
book.apply(flight1, data);


//////////////////////////////////////////
//call method

book.call(flight1, 22, 'Hii');
book.call(airIndia, 22, 'Hii');
book.call(airIndia, 223, 'Hlo');
console.log(flight1.bookings);
console.log(airIndia.bookings);
book.call(airIndia, ...data);


const flight3 = {
    airline: 'Air',
    iataCode: 'AIR',
    bookings: [],
}

const newBookFlight3 = book.bind(flight3); //return new variable
const newBookFlight1 = book.bind(flight1);
newBookFlight3(777, 'New Bind');
console.log(flight3.bookings);

const bookAirIndia = book.bind(airIndia, 11); 
//Partial application --- part of original function already applied
//always put flight number 11 
bookAirIndia('Jonas');

console.log(airIndia.bookings);



////////////////////////////////////////
//"this" is set dynamically

airIndia.planes = 200;
airIndia.buyPlane = function () {
    // console.log(this);
    this.planes++;
    console.log(this.planes);    
}

document.querySelector('.buy').addEventListener('click', airIndia.buyPlane.bind(airIndia));

/////////////////////////////////////////
// partial Application


const addTax = (rate, value) => value + value*rate;
const newCalcTax = addTax.bind(null, 0.10);

console.log(newCalcTax(100));

////////////////////////////////////////
// function return function

const addTaxRate = function (rate) {
    return function (value) {
        return value + value*rate;
    };
}

// console.clear();

const calcVAT = rate => val => val + val*rate;

const totalVal = calcVAT(0.25);
console.log(totalVal(100));

const addVAT = addTaxRate(0.23);
console.log(addVAT(100));


//////////////////////////////////////
// IIFE

// console.clear();


(function () {
    console.log('never called again');
})();


(() => console.log('never used agian'))();

{
    const secure = 20;
    var notSecure = 10;
}

// console.log(secure); //not define as it's private
console.log(notSecure);



////////////////////////////////////
// Closure of function


// console.clear();

const outerFunction = (a) => {
    let b = 10;
    return () => { 
        let sum = a+b;
        console.log(sum);
    };
}

const innerFunction = outerFunction(15);
console.dir(innerFunction);
innerFunction();


//////////Example 1 

let f;

const g = function () {
    const a = 5;
    f = function () {
        console.log(a*2);
    }    
}

const h = function () {
    const b = 50;
    f = function () {
        console.log(b*2);
    }
}

g();
f();
console.dir(f);

//re-assign
h();
f();
console.dir(f);

//////////Example 2 
// console.clear();

const board = function (n, wait) {
    let passenger = n/3;

    setTimeout(function () {
        console.log(`will start boarding for all ${n}`)
        console.log(`${passenger} passengers can be on board`);
    }, wait*1000);

    console.log(`Wait for ${wait} seconds`);
}

board(15,5);