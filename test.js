const { getGreeting } = require("./project");
const { getGreetingTwo } = require("./project");

// import { getGreeting } from "./project";
// import { getGreetingTwo } from "./project";

test("can create a basic greeting", () => {
  expect(getGreeting("Sam")).toBe("Hi Sam");
});

test("can create a second basic greeting", () => {
  expect(getGreetingTwo("Sam")).toBe("Yo Sam");
});
