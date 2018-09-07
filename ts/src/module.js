import { Class1} from './module2.js';
// import {default as f} from './module2js';
//  obj1.name ="abc"
// lname = "raju"
// console.log(f);
// console.log(lname);
// console.log(obj1.name)

let c = new Class1();

c.fun3();
c.fun4();
c.fun5();
Class1.fun8("Ritika");
// console.log("property of class", Class1.sname)



function *fuun(){
    console.log("genrator function yield 1")
    yield "hello"
    console.log("genrator function yield 2")
    yield "ratika"
    console.log("genrator function yield null")
}

let s = fuun();
console.log("yield ",s.next())
console.log("yield ",s.next())
console.log("yield ",s.next())
// console.log("yield ",s.next().value)


// fun1()           //next if its used no need to pass any parameters 
// fun2("amrit")

// console.log(`${fname} ${lname}`)
// console.log(obj1.name);

// read  only at import modules
// top down aproach  