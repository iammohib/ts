// people interface
interface People {
  name: string;
  age: number;
  greet: () => string;
}

// check if adult
const isAdultCheck = (person: People) => {
  if (person.age >= 18) {
    return true;
  } else {
    return false;
  }
};

// person object
const person: People = {
  name: "mohib",
  age: 21,
  greet: () => {
    return "hi";
  },
};

// using method to check if adult
const test = isAdultCheck(person);
console.log("Is person is adult?", test);
