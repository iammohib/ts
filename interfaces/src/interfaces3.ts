interface Peoplex {
  name: string;
  age: number;
  isLegal(): boolean;
}

class Manager implements Peoplex {
  constructor(public name: string, public age: number) {}
  isLegal(): boolean {
    return this.age >= 18;
  }
}

const user = new Manager("mohib", 3);
console.log(user.isLegal());
