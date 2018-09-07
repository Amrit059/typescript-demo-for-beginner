// let user={
//     id:1,
//     userId:function(){
//        console.log("user id is:",this.id)
//     }
// }
// user.userId(); //normal get id by function

// keyword  = // event let var const  for if of 
// property = // name age id guest test 
// function/ methords = // name change ()
// variables/Parameters = // any name values
// data types  = // any string Number Boolean 
// []
// {}
// ()

// var user1={
//     id:1,
//     userId:function(){
//         setTimeout(function(){console.log("user id is:",this.id)},1000)
//     }
// }
// user1.userId();//undefined keyword this

// const user5 =1000;
// const user2={
//     id:1,
//     userId:function(){
//     //    user2.id = 10
//         // let take=this; // tack value from this.id =1

//         setTimeout(function(){console.log("user id is:",user2.id)},1000)
//     }
// }
// user2.userId(); //normal function to use this keyword by other variable


// var user3={
//     id:1,
//     userId:function(){
//         // var take=this;
//         setTimeout(()=>console.log("user id is:",this.id),1000)
//     }
// }
// user3.userId();// fat arrow function
