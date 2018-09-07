var displaycolor = function (message) {
    var testlist = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        testlist[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(testlist); //spread operator
    // console.log(listOfColors)//array list of arguments[]
    // console.log(listOfColors.length)
    //  for(let i in listOfColors){ //for in list[i]
    //      //console.log(i);
    //      console.log(listOfColors[i])
    //  }
};
var message = "args list";
// displaycolor("red")
//displaycolor(message, "red","blue")
// displaycolor("red", "blue", "green")
var testlist = ["red", "blue", "green", "brown", "black", "yellow"];
//let testlist= [];
displaycolor(message, testlist); //spread operator fuction calling time 
// ( ... ) rest operator
//all individual args converted into array
// ( ... ) spread operator
// all array list is converted into individual list
