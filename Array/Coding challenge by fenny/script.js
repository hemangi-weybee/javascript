'use strict';

const arr1 = [
    {id: 1, name: "fenny"}, 
    {id: 2, name: "hemangi"}, 
    {id: 3, name: "hardi"}, 
    {id: 4, name: "nishita"}
];

const arr2 = [
    {id: 1, hobby: "sleeping"}, 
    {id: 2, hobby: "eating"}, 
    {id: 3, hobby: "dancing"}, 
    {id: 4, hobby: "travel"}, 
    {id: 1, hobby: "drawing"},
    {id: 1, hobby: "badminton"},
    {id: 2, hobby: "sketch"},
    {id: 4 , hobby: "designing"},
    {id: 3, hobby: "art & creaft"},
    {id: 2, hobby: "singing"}
];

// const output = [];

// arr1.forEach(u => {
//     const user = {};
//     user.of = u.name;
//     const h = arr2.filter(h => u.id === h.id).flatMap(h => h.hobby);
//     user.hobbies = h;
//     output.push(user);
// });

// console.log(output);

const output = arr1.map(u => {
    const user = {};
    user.of = u.name;
    const h = arr2.filter(h => u.id === h.id).flatMap(h => h.hobby);
    user.hobbies = h;
    return user;
});

console.log(output);