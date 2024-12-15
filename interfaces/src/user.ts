// INTERFACE
interface Userx {
  fullname: "mohib" | "prince" | "chikali"; // for custom values
  age: number;
  add?: {
    // to make it optional
    city?: string;
    state?: string;
    pincode?: number;
  };
}

// FUNCTION
const isAdult = (user: Userx): boolean => {
  return user.age > 18;
};

// USER-1
const user1: Userx = {
  fullname: "mohib",
  age: 23,
  add: {
    city: "lucknow",
    state: "U.P.",
    pincode: 226010,
  },
};

const response: boolean = isAdult(user1);
console.log(response);

// USER-2
const user2: Userx = {
  fullname: "prince",
  age: 12,
};

const response2: boolean = isAdult(user2);
console.log(response2);

// USER-3
const user3: Userx = {
  fullname: "chikali",
  age: 22,
  add: {
    city: "lucknow",
  },
};

const response3: boolean = isAdult(user3);
console.log(response3);
