// let newMap = new WeakMap();
// let obj1={};

// newMap.set(obj1, 10)
// let newMap1 =new WeakMap()

// newMap.set('fname','Amrit')
// // newMap1.set('age',24)
// console .log("obj Map",newMap.get(obj1))
// console .log("obj Map1",newMap1.get('fname'))
// // console .log("obj Map1",newMap1.get('age'))

// console.log("size of maps",newMap1.size)
// // console .log("check value", newMap1.has('lname'))

// newMap1.clear();
// console.log("size of maps",newMap.size)
// newMap1.delete('age')
// console.log("size of maps",newMap1.size)
//map can contain (Keys and Values) 
// key = obj1;
// value = 10;
//set(), get(), delete(), clear(), has(), size()
//Map also has a two types:- 1. StrongMaps 2. WeakMap

// iterable Maps
let newMaps = new Map([
    ['fname','Ritika'],['lname', 'Kochar']
]);

for(let key of newMaps.keys()){
    console.log("key of maps", key)

}
for(let value of newMaps.values()){
    console.log("values of maps", value)

}