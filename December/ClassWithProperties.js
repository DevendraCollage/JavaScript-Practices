// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  greet() {
    console.log(
      `Name : ${this.name}, Age : ${this.age}, Country : ${this.country}`
    );
  }
}

const p1 = new Person("Devendra", 23, "India");
const p2 = new Person("Jay", 23, "Sydney");

p1.greet();
p2.greet();
