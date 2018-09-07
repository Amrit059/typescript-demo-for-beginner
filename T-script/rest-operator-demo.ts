let displaycolor  =function (message, ...testlist){//rest operator as a agumentlist
    
    console.log(message);
    console.log(testlist);//spread operator
    // console.log(listOfColors)//array list of arguments[]
    // console.log(listOfColors.length)
    //  for(let i in listOfColors){ //for in list[i]
    //      //console.log(i);
    //      console.log(listOfColors[i])
    //  }
}

 let message = "args list";

// displaycolor("red")
 //displaycolor(message, "red","blue")
// displaycolor("red", "blue", "green")
 let testlist = ["red", "blue", "green", "brown", "black", "yellow"];
//let testlist= [];
displaycolor(message, testlist ) //spread operator fuction calling time 

// ( ... ) rest operator
//all individual args converted into array


// ( ... ) spread operator
// all array list is converted into individual list