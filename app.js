console.log("Hello World!\n==========\n");
function plus(number){
    return function plusNumber(number){
        let plus15 = plus(15)
    }
}
console.log(plus(10))
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
  console.log(users)
