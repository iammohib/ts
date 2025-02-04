function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const el = getFirstElement(["aman", "naman"]);
console.log(el.toLowerCase());
