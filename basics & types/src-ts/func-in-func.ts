const delayedCall = (fn: () => void) => {
  let i = 1;
  const timer = setInterval(() => {
    console.log(i);
    i++;
    if (i > 3) clearTimeout(timer);
  }, 1000);
  setTimeout(fn, 5000);
  return 0;
};
const func1 = () => {
  console.log("Hi there!");
};
delayedCall(func1);
