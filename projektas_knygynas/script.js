"use strict";
var books = [
    { title: 'Knyga #1', price: 10.25 },
    { title: 'Knyga #2', price: 5.15 },
    { title: 'Knyga #3', price: 7.32 },
    { title: 'Knyga #4', price: 54.01 },
    { title: 'Knyga #5', price: 77.17 },
        ];
//     console.log('Knygu sarasas:')

//     printBooks(books);
    
//     function printBooks(array){
//     array.map(print);
    
//     function print(book,index){
//             console.log(index+1 + ' - ' + book.title);
//     }
// }

// console.log("Books length - " + books.length);
// let newBook = {title: 'Knyga #6', price: 77.17};

// let booksNew = [...books, newBook];

// booksNew.push({title: 'Knyga #7', price: 87.17});
// // console.log('Knygu sarasas:')

// // printBooks(booksNew);

//     let lastBook = books[books.length-1];
//     console.log(lastBook);

// console.log("Last book '" + books[books.length-1].title +"' - " + lastBook.price ) ;
function sum(total, value){
    return total + value.price;
}
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// funkcijos vardui perduoda reiksmes auksciau aprasyta tvarka
let sumOfBookPrices = books.reduce(sum,  0);
console.log(sumOfBookPrices);

// let handTotal = handCards.reduce(function(sum, value) {return sum + value;}, 0);