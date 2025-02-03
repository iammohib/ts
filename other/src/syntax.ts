interface Address {
  city: string;
  pincode: number;
}

interface Userx {
  name: string;
  age: number;
  addresses1: Address[];
  //OR
  addresses2?: {
    city: string;
    pincode: number;
  }[];
}

const userx: Userx = {
  name: "mohib",
  age: 23,
  addresses1: [
    { city: "Lucknow", pincode: 226028 },
    { city: "Lucknow", pincode: 226028 },
  ],
};
