// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make : ${this.make}`);
    console.log(`Model : ${this.model}`);
    console.log(`Year : ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`No of Doors : ${this.doors}`);
  }
}

const car1 = new Vehicle("Ford", "Mustang", 1968);

console.log("-- Vehicle Details -- ");
car1.displayDetails();

const vehicle = new Car("Hyundai", "Verna", 2008, 4);

console.log("\n-- Car Details --");
vehicle.displayDetails();
