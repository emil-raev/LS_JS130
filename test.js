function foo() {
  let name = "Pete";
  return function () {
    console.log(name);
  };
}

let printPete = foo();

function foo() {
  let bar = 1;
  function baz() {
    let bak = 2;
    printPete(); // Pete
  }
}