const detail = (stdObj: { name: string; age: number }) => {
  console.log(`hi ${stdObj.name}/${stdObj.age}`);
};

const mohib: { name: string; age: number } = {
  name: "mohib",
  age: 23,
};
detail(mohib);
