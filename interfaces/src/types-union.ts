type k = string | number;

const sum = (a: k, b: k): void => {
  console.log((a as any) + b);
};

sum(1, 3);

const greet = (name: string): string => {
  return `hello ${name}`;
};

greet("mohib");
const res: string = greet("mohib");
console.log(res);
