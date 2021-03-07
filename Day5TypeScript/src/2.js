"use strict";
//b) 
let a = function (str1, str2, str3) {
    return [str1, str2, str3];
};
//c) 
let upperCased;
upperCased = function (str1, str2, str3) {
    return [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
};
//d)
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
};
//e)
f2(a);
f2(upperCased);
console.log(f2(a));
console.log(f2(upperCased));
//f)
//# sourceMappingURL=2.js.map