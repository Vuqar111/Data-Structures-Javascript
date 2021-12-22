const person = {
  firstname: "Max",
  age: 27,
  hobbies: ["Sports", "Cooki"],
  greet() {
    console.log("Hi I am " + this.firstname);
  },
};
console.log(person.firstname);

delete person.age;
console.log(person);
person.greet();
