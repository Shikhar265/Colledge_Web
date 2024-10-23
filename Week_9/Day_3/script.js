let person={
    firstName:"rohit",
    id:1212,
    asAdult:false
}

let p1=Object.create(person);

let arr=[1,2,3,4,"abc",false]
// arr.__proton__===Array.prototype

let isWinter=true;
// isWinter.__proto__===Boolean.prototype
// Boolean.protype.__proto__===Object.prototype

let num=10;
// num.__proto__===Number.prototype;
// Number.prototype.__proto__===Object.prototype;


let str=""
// str.__proto__===String.prototype
// String.prototype.__proto__===Object.prototype