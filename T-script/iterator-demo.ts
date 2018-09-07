/*
let str = "Hello";
let num = 10;
let arr = [1,2,3];
let obj = {name:"Ritika"};

console.log("String	:",typeof str[Symbol.iterator]);
console.log("Array 	:",typeof arr[Symbol.iterator]);
console.log("Number	:",typeof num[Symbol.iterator]);
console.log("Object :",typeof obj[Symbol.iterator]);

for(let s of str){
  console.log("string value is:",s)
}

for(let a  of arr){
  console.log("array value is:",a)
}

for(let o of obj){
  console.log("array value is:",o)
  
}

for(let n of num){
  console.log("numbers value is:",n)
}
*/

/*
let person ={
  fname:"Ritika",
  lname:"Kochar",
  age:23,
  class:"Typescript"
}

person[Symbol.iterator] = function(){
  let properties = Object.keys(person);
  let count =0;
  let isDone = false;
  let next=()=>{
    if(count >= properties.length){
      isDone=true;
    }
    return {done:isDone,value:this[properties[count++]]}
  }
  return  {next};
}

for(let p of person){
  console.log("person properties",p)
}
*/



/*
function *Abc(name,age){
  console.log("userName :", name)
  console.log( "age :",age)
  yield '1'
  console.log("userName :", name)
  console.log( "age :",age)
  yield '2'
  console.log("userName :", name)
  console.log( "age :",age)
  
}

console.log(Abc('ammy',24).next());
console.log(Abc('abc',34).next());
console.log(Abc('Ritika',23).next());

*/
