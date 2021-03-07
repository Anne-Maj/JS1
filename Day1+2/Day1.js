
/*
2) Implement user defined functions that take callbacks as an argument
Assume the JavaScript-array did not offer the filter method. Then you could implement it by yourself. 

a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a 
callback as the second and returns a new (filtered) array according to the 
code provided in the callback (that is with the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.
*/

const arr = [2,4,55,64,32,5,6,43]

/* const myFilter = arr.filter(function(num) {
    if(num>10){
        return true;
    }
});
 */
//kan også skrives: 
 const myFilter = arr.filter(num => num >=10);

console.log(myFilter);

let myFilter2 = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]>=10){
        myFilter2.push(arr[i]);
    }
}

console.log(myFilter2);


/*
b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
Test the method with the same array and callback as in the example with the original map method.
*/

const overTen = arr.map(function(num){
    return num>10;
});
console.log(overTen);

const myMap = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]>=10){
        myMap.push(arr[i]);
    }
}

console.log(myMap);

const numTimesTwo = arr.map(num => num *2);

console.log(numTimesTwo);

//Reduce

const arrSum = arr.reduce((total, num) => total + num, 0);
console.log(arrSum);

// a) Use join to create a single string from all, with names: comma-, space. and  # - separated.


var all= ["Lars", "Peter", "Jan", "Bo"];

const sep = all.join(",");

console.log(sep);

/* b) Given this array: var numbers = [2, 3, 67, 33]; 
Create a reducer function that will return the sum (105) of all values in numbers
 */

var numbers = [2, 3, 67, 33];

let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
}

console.log(sum);

// c)  Given this array:

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]
   
//Create a reducer function that will return the average age of all members.

let sumAge=0;

for(let i=0; i<members.length; i++){
    sumAge = sumAge + members[i].age; 
}
let avgAge = sumAge/members.length;
console.log("Average age: "+avgAge);

//var reducer = function(accumulator, member,index,arr ){}

const totalAge = members.reduce(function (accumulator, member) {
    return accumulator+member.age;
},0);

const avgerageAge = totalAge/members.length;
console.log("Avg. age 2: "+avgerageAge);

//Arrow fnkt:

const totalAgeArrow = members.reduce((acc, member) => acc + member.age, 0);
console.log(totalAgeArrow);

