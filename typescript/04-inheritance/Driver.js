"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
//let myShape = new Shape(10, 15);
//console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(10, 15, 5);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(5, 6, 12, 14);
console.log(myRectangle.getInfo());
console.log("*******************************");
console.log("*******************************");
var myShapes = [];
//myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (var _i = 0, myShapes_1 = myShapes; _i < myShapes_1.length; _i++) {
    var shape = myShapes_1[_i];
    console.log(shape.getInfo());
}
console.log("################################");
console.log("################################");
var areas = [];
areas.push(myCircle.getArea());
areas.push(myRectangle.getArea());
for (var _a = 0, areas_1 = areas; _a < areas_1.length; _a++) {
    var area = areas_1[_a];
    console.log(area);
}
