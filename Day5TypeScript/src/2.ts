
//a)
interface myFunc {
    (str1:string, str2:string, str3:string): string[];

}

//b) 
let a = function(str1:string, str2:string, str3:string){
    return [str1,str2, str3];

}

//c) 
let upperCased: myFunc;
upperCased = function(str1:string, str2:string, str3:string){
    return[str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
}

//d)
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}

//e)
f2(a);
f2(upperCased);

console.log(f2(a));
console.log(f2(upperCased));

//f)

