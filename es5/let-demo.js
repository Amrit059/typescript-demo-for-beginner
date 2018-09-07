// var a = 1;
// var b = 2;
// //for check the scope of let keyword
// if (a == 1) {
//     var a = 10;
//     let b = 20;// block type
//     console.log("a is:", a) //10
//     console.log("b is:", b) //20
// }
//  console.log("a is:", a) // 10
//  console.log("b is:", b) // 2
// function FunName(name) { 
//     let username;
//     if (name === "abc") {
//         username = name;
//     } else {
//         username = "not Avaliable";
//     }
//     console.log(username)
// }
// // global declare and use in the function
// FunName("abc");
// function FunName1(name) { 
//     let username;
//     if (name === "abc") {
//         let username = name;
//     } else {
//         let username = "not Avaliable";
//     }
//     console.log(name)
// }
// //let scope or each time variable is new.
// FunName1('bca');
// function FunName2(name) { 
//     if (name === "abc") {
//         let username = name;
//     } else {
//         let username = "not Avaliable";
//     }
//     let username;
//     console.log(name)
// }
// //we declare the local let variables.
// FunName2("abc");
// function FunName3(name) { 
//     if (name === "abc") {
//         username = name;
//     } else {
//         username = "not Avaliable";
//     }
//     let username;
//     console.log(name)
// }
// //if we declare the let keyword after the use.
// FunName3('abc');
