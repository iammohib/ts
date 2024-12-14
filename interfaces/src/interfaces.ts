interface userType {
  name: string;
  age: number;
}

const details = (stdObj: userType) => {
  console.log(`hi ${stdObj.name}/${stdObj.age}`);
};

const mohibs: userType = {
  name: "mohib",
  age: 23,
};
details(mohibs);
