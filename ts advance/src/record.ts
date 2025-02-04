// You can type objects like follows -
interface User3 {
  id: string;
  name: string;
}

// type Users3 = { [key: string]: User3 };
// OR use Record
type Users3 = Record<string, User3>;

const users1: Users3 = {
  abcd: { id: "123", name: "mohib" },
  efgh: { id: "4576", name: "khan" },
};
