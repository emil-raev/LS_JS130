const Car = require("./car");

describe("The Car class", () => {
  test("has four wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });
});

test('raises a TypeError when called drive on it', () => {
  let car = new Car();
  expect(car.drive()).toThrow(TypeError);
});