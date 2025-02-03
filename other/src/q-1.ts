interface User {
  firstName: string;
  lastName: string;
  age: number;
}

// const filtered = (users: User[]) => {
//   let filteredList = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age >= 18) {
//       filteredList.push(users[i]);
//     }
//   }
//   return filteredList;
// };

const filteredFunc = (users: User[]) => {
  return users.filter((x) => x.age >= 18);
};

const users: User[] = [
  { firstName: "mohibuddin", lastName: "mustkeem", age: 23 },
  { firstName: "aman", lastName: "ashok", age: 2 },
];

const resultx = filteredFunc(users);
console.log(resultx);
