// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    var a1 = this.height * this.width;
    console.log(`Area of Rectangle is = ${a1}`);
  }

  perimeter() {
    var p1 = 2 * (this.height + this.width);
    console.log(`Perimeter of Rectangle is = ${p1}`);
  }
}

const prompt = require("prompt-sync")();

var height = parseInt(prompt("Enter Height : "));
var width = parseInt(prompt("Enter Width : "));
console.log("\n");

const obj1 = new Rectangle(height, width);

obj1.area();
obj1.perimeter();
