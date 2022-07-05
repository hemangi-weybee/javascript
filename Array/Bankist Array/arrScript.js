'use strict';

/////////////////////////////////////////////////

let arr = ['a','b','c','d','e'];

////////////////// slice /////////////////////
console.log(arr.slice(2));
console.log(arr.slice(2,4));  //end is not included
console.log(arr.slice(-2));  //['d', 'e']
console.log(arr.slice(1, -1));  //['b', 'c', 'd']



////////////////// splice /////////////////////

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); 
console.log(months); 

months.splice(4, 1, 'May'); 
console.log(months);  

months.splice(3,2,'aaa');  
console.log(months); 

////////////////// reverse /////////////////////

arr = ['a','b','c','d','e'];
let revArr = arr.reverse();
console.log(arr);
console.log(revArr);  

////////////////// concat /////////////////////

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
console.log([...array1, ...array2]);

////////////////// join /////////////////////

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

////////////////// at /////////////////////

arr = [23,11,45];

console.log(arr[0]); //23
console.log(arr.at(1)); //11
console.log(arr.at(-1)); //45

console.log('Jonas'.at(-1));
console.log('Jonas'.at(1));

////////////////// forEach /////////////////////

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((move, i) => { 
  move>0 ? console.log(`${i} => Deposited  : ${move}`) : 
  console.log(`${i} => Withdraw : ${Math.abs(move)}`)
});


//////////////// entries //////////////////////

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

//////////////// map //////////////////////

const eurToUsd = 1.1;
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});

const movementUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementUSD);

const movementsDesc = movements.map((move, i) => `[${i+1}]  ${move>0 ? 'Deposited' : 'Withdraw'} : ${Math.abs(move)}`);

console.log(movementsDesc);


//////////////// filter //////////////////////

const deposits = movements.filter(mov => mov > 0);

console.log(deposits);

const u1 = {
  name: 'stw',
  age: 15,
  projects : 2,
}

const u2 = {
  name: 'js',
  age: 18,
  projects : 3,
}

const u3 = {
  name: 'jd',
  age: 12,
  projects : 1,
}

const users = [u1,u2,u3];

const child = users.filter((u) => u.age < 18);
console.log(child);

const balance = movements.reduce(function (acc, curr, i, arr) {
  return acc+curr;  
}, 0);

console.log(balance);

const maximumBalance = movements.reduce((acc, curr) => (acc>curr) ? acc : curr, movements[0]);

console.log(maximumBalance);


////////////////////// find ////////////////////////

const firstTransaction = movements.find(mov => mov < 0);
console.log(firstTransaction);


///////////////////// findIndex /////////////
const index =  users.findIndex(u => u.name === 'jd');
console.log(index);


//////////////////// includes ///////////////


console.log(movements);
console.log(movements.includes(1000));

/////////////////// some ////////////////

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);


/////////////////// every ///////////////////

console.log(movements.every(mov => mov > 0));

const depositCondition = mov => mov > 0;
console.log(movements.some(depositCondition));
console.log(movements.every(depositCondition));
console.log(movements.filter(depositCondition));




///////////////////// flat  ////////////////

console.log(arr);
arr.push([1,2,3]);
console.log(arr.flat());

const newArr =  [[1,2,3],[4,[5,6]],7,8];
console.log(newArr.flat(2));  //parameter is level of nesting


////////////////// flatMap ///////////

const totalProjects = users.flatMap(u => u.projects).reduce((acc, curr) => acc+curr, 0);
console.log(totalProjects);


////////////// sort /////////////

console.log(movements);

// ////ascending
// movements.sort((curr,next) =>  {
//   if(curr > next) return 1;
//   if(curr < next) return -1;
// });
// console.log(movements);

movements.sort((curr, next) => next - curr); //descending
console.log(movements);

movements.sort((curr, next) => curr - next); //ascending
console.log(movements);

///////////////// fill ////////////////

//// it will work on the empty array
////// fill(element, start, end)

//// empty array + fill 
const x = new Array(7);
console.log(x);

x.fill(1,3,5);
console.log(x);

x.fill(0);
console.log(x);

///////////////// Array.from() /////////////

console.clear();

const y = Array.from( {length : 7}, () => 1);
console.log(y);

const z = Array.from( {length : 7}, (_,i) => i+1);
console.log(z);

