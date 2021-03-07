// A)

abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number; 

    get color(): string {
        return this._color;
    }
    set color(color:string){
        this._color=color
    }

    toString(): string {
        return `Color: ${this.color}, area: ${this.area}, perimeter: ${this.perimeter}`;

    
  }
}
// En abastrakt klasse kan ikke instantieres

// B)

class Circle extends Shape{
    _radius:number;
    constructor(radius:number, color:string){
        super(color);
        this._radius=radius;
    }
    get radius(): number {return this._radius;}
    set radius(radius:number) {this._radius = radius;}

    get area(): number {
        return (Math.PI * Math.pow(this._radius,2));
    }
    get perimeter(): number {
        return (2 * Math.PI * this._radius);
    }

}

let circle = new Circle(8, 'yellow');
console.log(circle.toString());
circle.color = 'red';
circle.radius = 4;
console.log(circle.toString());

// C)

class Cylinder extends Circle {
    _height:number;
    constructor(color:string, radius:number, height:number){
        super(radius, color);
        this._height=height;
    }
get height(): number {
    return this._height;
}
set height(height:number) {
    this._height=height;
}
get area(): number {
    return (2*Math.PI*this._radius*(this._height*this._radius));
}
get perimeter(): number {
    throw new Error("Not Implemented");
}
get volume():number {
    return (Math.PI * Math.pow(this._radius,2) * this._height);
}

toString(): string{
    return `Cylinder. color: ${this.color}, area: ${this.area}, volume: ${this.volume}, perimeter: Not implemented!`
}
}

let cylinder = new Cylinder("Red", 5,8);
console.log(cylinder.area);
console.log(cylinder.volume);

console.log(cylinder.toString());


