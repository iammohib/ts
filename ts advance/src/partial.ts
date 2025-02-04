interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type updateProfile = Partial<User>;

const updateProfileFunc = (formData: updateProfile) => {
  console.log(formData);
};

const userx: User = {
  name: "mohib",
  age: 23,
  email: "myselfmohib@gmail.com",
  password: "password@123",
};

updateProfileFunc({ email: "myselfmohib@gmail.com", password: "password@123" });
