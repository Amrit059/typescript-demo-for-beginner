var person = /** @class */ (function () {
    function person() {
        // constructor(num, num1){
        //     // this.name = name;
        //     // this.num3 = num + num1;
        //     console.log(num + num1 + ': person constructor')
        // }   
        this.lastName = "Amrit";
    }
    person.fun2 = function () {
        console.log("static values");
    };
    person.prototype.fun = function (num, num1, name) {
        // console.log("normal function")
        console.log(num + num1 + " " + name + ': person normal function');
    };
    return person;
}());
var name1 = "AMRIT";
var val1 = 5;
var val2 = 6;
var p = new person(); // p object of class person         //  At the class calling time OR object creation time
//   constructor will be automaticaly call 
p.fun(val1, val2, name1);
console.log("lastname", p.lastName);
//console.log(p.lastname);
//  console.log(typeof person)
//  console.log(p.fun === person.prototype.fun)
