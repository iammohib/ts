interface User2 {
  name: string;
  age: number;
  readonly email: string;
  password: string;
}

const userxx: User2 = {
  name: "mohib",
  age: 23,
  email: "myselfmohib@gmail.com",
  password: "password@123",
};

userxx.name = "mohibuddin";
// userxx.email = "mohibuddin@gmail.com"; // cause ERROR, as email is an read only

console.log(userxx);
