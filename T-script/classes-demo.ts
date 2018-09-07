 class person{

    constructor(){} 
    
    // constructor(num, num1){
    //     // this.name = name;
    //     // this.num3 = num + num1;
    //     console.log(num + num1 + ': person constructor')
    // }   

    lastName="Amrit";

    static fun2(){
        console.log("static values")
    }

    fun(num, num1, name){
        // console.log("normal function")
        console.log(num + num1 +" "+name+ ': person normal function')
    } 
}
var name1 ="AMRIT";
var val1=5;
var val2 =6;

let p = new person()// p object of class person         //  At the class calling time OR object creation time
                                                        //   constructor will be automaticaly call 
p.fun(val1, val2, name1)
console.log("lastname",p.lastName)
//console.log(p.lastname);
//  console.log(typeof person)
//  console.log(p.fun === person.prototype.fun)
