let str="the sky is blue";
// op str="eht yks si eulb"
let ans1=str.split(" ");
str1="";
for(let i=0;i<ans1.length;i++)
{
    str1=str1+ans1[i].split("").reverse().join("")+" ";
}
console.log(str1);

// op str="blue is sky the"
let ans=str.split(" ").reverse().join(" ");
console.log((ans));


let user={
    name1:"rohit",
    fun: ()=>{
        console.log(this.name1);
        
    }
}
user.fun();

let user1={
    name1:"rohit",
    fun: function(){
        console.log(this.name1);
        
    }
}
user1.fun();

function test1()
{
    console.log(this);
}
test1();

let res=()=>{
    console.log(this);    
}
res();

let person1={
    sayname:function()
    {
        return this.name;
    }
}
let person2={
    name:"abc"
}
console.log(person1.sayname.call(person2));

let per1={
    sayname:function(greet)
    {
        return greet + " " +this.name;
    }
}
let per2={
    name:"abc"
}
console.log(per1.sayname.apply(per2,["welcome"]));

let p1={
    id:1212,
    say_persone_id:function()
    {
        return this.id;
    }
}
let p2={
    id:2121,
}
console.log(p1.say_persone_id.apply(p2));
console.log(p1.say_persone_id.bind(p2));