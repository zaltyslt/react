"use strict";
var books = [
    { title: 'Knyga #1', price: 10.25 },
    { title: 'Knyga #2', price: 5.15 },
    { title: 'Knyga #3', price: 7.32 },
    { title: 'Knyga #4', price: 54.01 },
    { title: 'Knyga #5', price: 77.17 },
        ];

// const apps =['WhatsApp', 'Instagram', 'Facebook'];
// apps.forEach((value, index, array)=>{
//     console.log(`${value}  ${index} ${array}`);
// });

// // filter(function (element, index, array) { /* … */ }, thisArg)
// let filteredBooks = books.filter( 
//     function(value, index, array ){
//     // if true value is pushed to the results and iteration continues
//     // return empty array if nothing found
// } );

// let expensiveBooks = books.filter(({price}) => price > 20);
// expensiveBooks.forEach(value => console.log(value.title));

// // find(function (element, index, array) { /* … */ }, thisArg);
// const oneExpensiveBook = books.find(element => element.price > 50);
// console.log(oneExpensiveBook);

// //reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ }, initialValue);
// let totalSum = books.reduce((sum, element) => {return sum + element.price},0);
// console.log(totalSum);

// console.log("=====");



// 1. Parašykite funkciją, kuri atspausdintų visą knygų sąrašą (knygos eilės numerį ir pavadinimą. Panaudokite metodą map.    
books.forEach((element, index) => console.log(`${index+1}. ${element.title}`));

// 2. Parašykite funkciją, kuri paskaičiuotų, kiek knygų yra lentynoje.
let booksCount = books.length;
console.log("There are  " + booksCount);

// 3. Parašykite funkciją, kuri į duoto knygų masyvo galą pridėtų knygą. 
// Pvz. 'Knyga #6', kaina 2,75. Panaudokite metodą push() ir ... (spread)
books.push({ title: 'Knyga #6', price: 2.75 });
books = [...books, {title: 'Knyga #7', price: 5.75 }];
console.log(books);

// 4. Parašykite funkciją, kuri išvestų paskutinės knygos pavadinimą ir kainą.
console.log(books[books.length-1]);

// 5. Parašykite funkciją suskaičiuojančią, už kiek eurų yra knygų knygyne.
let totalSum = books.reduce((sum,element) => sum + element.price, 0);
console.log(totalSum);

// 6. Parašykite funkciją, kuri apskaičiuotų 25 % nuolaidą knygoms, kurių kaina didesnė nei 10 eurų ir atspausdintų:
// a)
let booksM = books.filter(element => element.price > 10);
console.log(booksM);

function discount(element){
    return {...element, price: element.price * 0.75};
}
let booksN = booksM.map(discount);
console.log(booksN);

booksN.forEach((element, index) => {console.log(`${index+1}. ${element.title} ${element.price}`)});

// b) 
books.filter(element => element.price > 10)
     .map(element => {return {...element, price: element.price * 0.75}})
     .forEach((element, index) => console.log(`${index+1}. ${element.title} ${element.price}`));

//Reduce
// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce((sum, element) => sum + element,0);
    }
    console.log(total([1,2,3])); // 6

// 2) Turn an array of numbers into a long string of all those numbers.
    function stringConcat(arr) {
        //kodel neveikia nors kaip ir prie stringo pridedu '' + 1?
        //return arr.reduce((str, element) => {return str.stringConcat(element)},'');
        return arr.reduce((str, element) => {return str+element},'');
        }
        console.log(stringConcat([1,2,3,4])); // "123"


//3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    return arr.filter(element => element.voted).length;
    }
    var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

// 4) Given an array of all your wishlist items, figure out how much it would cost to just
// buy everything at once

function shoppingSpree(arr) {
   return wishlist.reduce((sum, element)=>{return sum + element.price},0);
    }
    var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
    ];
    console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
    const arr2 = [];
    //1 return arr.forEach(element => arr2.push(...element));
    //2 return arr.reduce(function (arr1,element) {return arr1.concat(element)},[]);
    //3 return arr.reduce((arr1, element)=>{return [...arr1, ...element]},[]); 
    //4 return arr.flatMap(element => element);
    //5
    return arr.flat();
}
    
    var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
    ];
   
    console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6) Given an array of potential voters, return an object representing the results of the vote
/*
Include how many of the potential voters were in the ages 18-25, how
many from 26-35, how many from 36-55, and how many of each of those
age ranges actually voted. The resulting object containing this data
should have 6 properties. See the example output at the bottom.
*/ 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
    ];
    
    function voterResults(arr) {
    const voterRes = [];

    
    voterRes.push("numYoungVotes: "+arr.filter(voter => voter.age >= 18 && voter.age <= 25).filter(voter=>voter.voted).length);
    voterRes.push("numYoungPeople: "+arr.filter(voter => voter.age >= 18 && voter.age <= 25).length);
    
    voterRes.push("numMidVotesPeople: "+arr.filter(voter => voter.age >= 26 && voter.age <= 35).filter(voter=>voter.voted).length);
    voterRes.push("numMidsPeople: "+arr.filter(voter => voter.age >= 26 && voter.age <= 35).length);
    
    voterRes.push("numOldVotesPeople: "+arr.filter(voter => voter.age >= 36 && voter.age <= 55).filter(voter=>voter.voted).length);
    voterRes.push("numOldsPeople: "+arr.filter(voter => voter.age >= 36 && voter.age <= 55).length);
    
    return voterRes;
    }
    
    console.log(voterResults(voters)); // Returned value shown below:
    /*
    { numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotesPeople: 3,
    numMidsPeople: 4,
    numOldVotesPeople: 3,
    numOldsPeople: 4
    }
    */