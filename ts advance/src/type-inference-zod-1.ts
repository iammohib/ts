import { z } from "zod";

const A = z.string();
type A = z.infer<typeof A>;

// const u: A = 123; // TYPEERROR
const u: A = "mohib"; // NO-ERROR
console.log(u);
