interface Address {
  houseNo: number;
  city: string;
  state: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address: Address;
}

interface Office {
  address: Address;
}
