type UserType = {
  name: string;
  age: number;
};

const details2 = (stdObj: UserType) => {
  console.log(`hi ${stdObj.name}/${stdObj.age}`);
};

const mohibs2: UserType = {
  name: "mohib",
  age: 23,
};
details2(mohibs2);
