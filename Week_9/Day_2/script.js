let person1={
    FirstName:"rohit",
    sayName:function(){
        console.log( this.FirstName );
    }
}

let person2={
    FirstName:"rahul"
}

let res=person1.sayName.bind(person2);
res();//invoc the output

// ------------------------------------------------------------------------------------------------------------------------------

// HOF higher order function
// when we pass a entire function as argument in another is known as "HOF"

function fun(a)
{
    console.log("this is  fun function");
    a()
}
function test() 
{   
    console.log("this is a test function");        
}
fun(test);

// when we rteurn entire inner function inside a outer function is known as "HOF"
// closures in js
// when we return a function from a outer function and that returned function has access to the outer function
// scope even after the outer function has been called is known as "closure"

function outer()
{
    let a=0
    function inner()
    {
        a++;
        console.log(a);
        
        console.log("this is a inner function");
    }
    return inner;
}
let resx=outer();
resx()
// resx()
// resx()
// resx()
// resx()
// resx()

// ---------------------------------------------------------------------------------------------------------------------------------

let radius=[1,2,3,4,5,6]
// area =[,,,,,,] 3.14*r*r
// cirumferance=[,,,,,] 2*3.14*r
// hemisphere=[,,,,,] 2/3*3.14*r*r*r
// sphere=[,,,,,] 4/3*3.14*r*r*r

function calculate(logic)
{
    let ress=[];
    for(let i=0;i<radius.length;i++)
    {
        ress.push(logic(radius[i]));
    }
    console.log(ress);    
}

function area(r)
{
    return 3.14*r*r;
}
function cirumferance(r)
{
    return 2*3.14*r;
}
function hemisphere(r)
{
    return (2/3)*3.14*r*r*r;
}
function sphere(r)
{
    return (4/3)*3.14*r*r*r;
}
calculate(area)
calculate(cirumferance)
calculate(hemisphere)
calculate(sphere)