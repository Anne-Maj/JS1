function ​reverseArr<T>​(arg: Array<T>): Array<T> {
    return arg.reverse();
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"]));

class DataHolder<T>{
    val: T;
    constructor(val:T){
        this.val=val}

getValue():T{return this.val}
setValue(val: T){this.val=val};
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue);
d.setValue("World");
console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());