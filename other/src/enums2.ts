enum Roles {
  admin = "admin",
  user = "user",
}

interface loginCheck {
  name?: string;
  email: string;
  password: string;
  role: Roles;
}

const loginFunc = (credentials: loginCheck) => {
  return credentials.role;
};

const res = loginFunc({
  email: "mohin@gmail.com",
  password: "mohib@123",
  role: Roles.user,
});

console.log(res);
