/* eslint-disable max-lines-per-function */
let Triangle = require('./triangle.js');

describe("Triangle", () => {
  xtest("equilateral triangles have equal sides", () => {
    const triangle = new Triangle(2, 2, 2);
    expect(triangle.kind()).toEqual("equilateral");
  });

  xtest("larger equilateral triangles also have equal sides", () => {
    const triangle = new Triangle(10, 10, 10);
    expect(triangle.kind()).toEqual("equilateral");
  });

  xtest("isosceles triangles have last two sides equal", () => {
    const triangle = new Triangle(3, 4, 4);
    expect(triangle.kind()).toEqual("isosceles");
  });

  xtest("isosceles trianges have first and last sides equal", () => {
    const triangle = new Triangle(4, 3, 4);
    expect(triangle.kind()).toEqual("isosceles");
  });

  xtest("isosceles triangles have two first sides equal", () => {
    const triangle = new Triangle(4, 4, 3);
    expect(triangle.kind()).toEqual("isosceles");
  });

  xtest("isosceles triangles have in fact exactly two sides equal", () => {
    const triangle = new Triangle(10, 10, 2);
    expect(triangle.kind()).toEqual("isosceles");
  });

  xtest("scalene triangles have no equal sides", () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.kind()).toEqual("scalene");
  });

  xtest("scalene triangles have no equal sides at a larger scale too", () => {
    const triangle = new Triangle(10, 11, 12);
    expect(triangle.kind()).toEqual("scalene");
  });

  xtest("scalene triangles have no equal sides in descending order either", () => {
    const triangle = new Triangle(5, 4, 2);
    expect(triangle.kind()).toEqual("scalene");
  });

  xtest("very small triangles are legal", () => {
    const triangle = new Triangle(0.4, 0.6, 0.3);
    expect(triangle.kind()).toEqual("scalene");
  });

  xtest("xtest triangles with no size are illegal", () => {
    expect(() => { new Triangle(0, 0, 0); }).toThrow();
  });

  xtest("triangles with negative sides are illegal", () => {
    expect(() => { new Triangle(3, 4, -5); }).toThrow();
  });

  xtest("triangles violating triangle inequality are illegal", () => {
    expect(() => { new Triangle(1, 1, 3); }).toThrow();
  });

  xtest("triangles violating triangle inequality are illegal 2", () => {
    expect(() => { new Triangle(7, 3, 2); }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 3", () => {
    expect(() => { new Triangle(10, 1, 3); }).toThrow();
  });

  xtest("triangles violating triangle inequality are illegal 4", () => {
    expect(() => { new Triangle(1, 1, 2); }).toThrow();
  });
});