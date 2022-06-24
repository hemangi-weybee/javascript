// 'use strict';

// // LECTURE: Functions
// function describeCountry(country, capitalCity, population){
//     const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return description;
// }

// const country = "India";
// const capitalCity = "Delhi";
// let population = "350";

// console.log(describeCountry(country,capitalCity,population));
// console.log(describeCountry('Finland','Helsinki',6));
// console.log(describeCountry('Italy','Rome',280));


// function percentageOfWorld1(population) {
//     return population/7900 * 100;
// }
// console.log(`${country} has ${population} people, so it's about ${percentageOfWorld1(population).toFixed(2)}% of the world population`);
// console.log(`${country} has ${population} people, so it's about ${percentageOfWorld1(7000).toFixed(2)}% of the world population`);
// console.log(`${country} has ${population} people, so it's about ${percentageOfWorld1(40).toFixed(2)}% of the world population`);

// const percentageOfWorld2 = function (population) {
//     return population/7900 * 100;
// }

// const percentage = percentageOfWorld2(population);
// console.log(`${country} has ${population} people, so it's about ${percentage.toFixed(2)}% of the world population`);


// // LECTURE: Arrow Functions
// const percentageOfWorld3 = population => population/7900 * 100;
// console.log(`${country} has ${population} people, so it's about ${percentageOfWorld3(population).toFixed(2)}% of the world population`);


// // LECTURE: Functions Calling Other Functions
// function describePopulation(country, population){
//     return `${country} has ${population} million people, which is about ${percentageOfWorld1(population).toFixed(1)}% of the world`;
// }

// console.log(describePopulation(country,population));
// console.log(describePopulation('Itlay',40));
// console.log(describePopulation('China',1441));


// // LECTURE: Introduction to Arrays

// let populations = new Array(40,790,350,120);
// console.log(population.length + 1 >= 4);

// let percentages = [percentageOfWorld1(populations[0]).toFixed(1),
// percentageOfWorld1(populations[1]).toFixed(1), percentageOfWorld1(populations[2]).toFixed(1)
// ,percentageOfWorld1(populations[populations.length-1]).toFixed(1)];

// console.log(percentages);

// // LECTURE: Basic Array Operations (Methods)

// let neighbours = ['China', 'Pakistan', 'Bhutan', 'Nepal'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop()
// console.log(neighbours);

// if(!neighbours.includes('Germany')) console.log("Probably not a central European country :D");

// if(neighbours.includes('China')) neighbours[neighbours.indexOf("China")] = 'Republic of China';
// console.log(neighbours);


// // LECTURE: Introduction to Objects

// const myCountry = {
//     country : 'India',
//     capital : 'Delhi',
//     language : 'Hindi',
//     population : 30,
//     neighbours : neighbours,
// }
// console.log(myCountry);

// // LECTURE: Dot vs. Bracket Notation

// console.log(`${myCountry.country}  has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// myCountry.population = myCountry.population + 2;
// myCountry['population'] = myCountry['population'] + 2;
// console.log(myCountry.population);


// // LECTURE: Object Methods

// myCountry.describe = function () {
//     return `${this.country} has ${this.population} million people and its capital city is ${this.capital}`;
// }

// myCountry.checkIsland = function () {
//     this.isIsland = this.neighbours.length > 0 ? false : true;
//     return this.isIsland;
// }

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());


// //LECTURE: Iteration: The for Loop

// for (let i=1; i<=50; i++ ){
//     console.log(`Voter number ${i} is currently voting`);
// }

// //LECTURE: Looping Arrays, Breaking and Continuing

// let percentages2 = [];

// for (let i = 0 ; i< populations.length ; i++){
//     percentages2.push(percentageOfWorld1(populations[i]).toFixed(1));
// }

// console.log(percentages2);

// // LECTURE: Looping Backwards and Loops in Loops

// let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for(let i = 0; i < listOfNeighbours.length ; i++){
//     for(let j = 0; j < listOfNeighbours[i].length ; j++){
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
//     }
// }

// //LECTURE: The while Loop

// let percentages3 = [];

// let i = 0;

// while (i< populations.length){
//     percentages3.push(percentageOfWorld1(populations[i]).toFixed(1));
//     i++;
// }

// console.log(percentages3);

