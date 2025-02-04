interface User5 {
  id: string;
  name: string;
}

const usersMap = new Map<string, User5>();

usersMap.set("abcd123", { id: "123x23", name: "mohib" });
usersMap.set("efgh456", { id: "123x23", name: "mohib" });

console.log(usersMap.get("abcd123"));
