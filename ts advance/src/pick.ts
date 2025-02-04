interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type loginData = Pick<User, "email" | "password">;

const loginFunc = (formData: loginData) => {
  console.log(formData);
};

const user: User = {
  name: "mohib",
  age: 23,
  email: "myselfmohib@gmail.com",
  password: "password@123",
};

loginFunc({ email: "myselfmohib@gmail.com", password: "password@123" });
