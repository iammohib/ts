interface Usera {
  name: string;
  age: number;
}

const details = (stdObj: Usera) => {
  console.log(`hi ${stdObj.name}/${stdObj.age}`);
};

const mohibs: Usera = {
  name: "mohib",
  age: 23,
};
details(mohibs);
