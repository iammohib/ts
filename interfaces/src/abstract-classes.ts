abstract class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract greet(): string;
  hello() {
    console.log("hello ji");
  }
}

class Employee extends User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    super(name, age);
    this.name = name;
    this.age = age;
  }

  greet() {
    return "hi " + this.name;
  }
}
