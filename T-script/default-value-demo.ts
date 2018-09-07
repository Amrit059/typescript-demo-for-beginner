// let regularValue = function (value){
//     console.log("value is",value)
// }
// regularValue(5)

// let regularValue1 =function (value = 10){
//     console.log("value is",value) //20  //10
// }
// regularValue1(undefined)

// let regularValue2 = function (value = 10, bonus = 10){
// console.log("value is",value)
// console.log("value and bonus",value + bonus )
// }
// regularValue2(20)
// regularValue2
// regularValue2(20, 20)
// regularValue2(undefined, 30)
// regularValue2(undefined, undefined)

// let percent = 0.1;
let percent = ()=> 0.1;
// let regularValue2 = function (value =10, bonus =10 * 0.1){
// let regularValue2 = function ( bonus =10 , value =10){
let regularValue2 = function (value =10, bonus =10 ){
console.log("value is",value)
// console.log("bonus + percent",bonus = bonus * 0.1)
console.log("value and bonus",bonus  + value)
console.log("arguments list",arguments.length)
}
// regularValue2(20)
// regularValue2
// regularValue2(20, 20)
// regularValue2(undefined, 30)
// regularValue2(undefined, undefined)

