// object -- key value 

let person={
    // key:value
    Name: "xyz",
    age:18
}
console.table(person.Name);
console.log(person.age);


// // function formation syntax
// function name(varibales)
// {
//     operation
//     console.log();//here or
//  }
// name(values)
// console.log();//here

// Exmaple 1
function add(a,b)
{
    return a+b;
}
let res=add(2,4);
console.log(res);


// Exmaple 2 sum of first 4 natural numbers
function sum(n)
{
    let res1=(n*(n+1))/2;
    console.log(res);
}
sum(3);

// Exmaple 3 combination

function comb(n)
{
    let fact=1;
    for(let i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}
let n=5;
let r=3;
let res2=comb(n)/comb(n-r);
console.log(res2);


// Arrow function
let add1=(a,b)=>{
    return a+b;
}
console.log(add1(2,4));

let data=a=>a+10;
console.log(data(10));


