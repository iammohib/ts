interface User {
  name: string;
  age: number;
}

const details = (stdObj: User) => {
  console.log(`hi ${stdObj.name}/${stdObj.age}`);
};

const mohibs: User = {
  name: "mohib",
  age: 23,
};
details(mohibs);
