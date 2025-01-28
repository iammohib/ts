type userDetails = {
  name: string;
  age: number;
  height: number;
  contact: number;
};

type userAddress = {
  address: {
    locality: string;
    city: string;
    state: string;
    pincode: number;
  };
};

type user = userDetails & userAddress;

const users1: user = {
  name: "mohib",
  age: 23,
  height: 6,
  contact: 1234567890,
  address: {
    locality: "malhaur",
    city: "lko",
    state: "UP",
    pincode: 226028,
  },
};

console.log(users1);
