import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

//let myShape = new Shape(10, 15);
//console.log(myShape.getInfo());

let myCircle = new Circle(10, 15, 5);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(5, 6, 12, 14);
console.log(myRectangle.getInfo());

console.log("*******************************");
console.log("*******************************");


let myShapes : Shape[] = [];

//myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);

for(let shape of myShapes) {

    console.log(shape.getInfo());
}


console.log("################################");
console.log("################################");

let areas : number[] = [];
areas.push(myCircle.getArea());
areas.push(myRectangle.getArea());

for(let area of areas) {

    console.log(area);

}