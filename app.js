console.log("Hello World!\n==========\n");
function plus(number){
    return function (plusNumber){
        return number + plusNumber
    }
}
let plus15 = plus(15)
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

  users.forEach(user => console.log(user.name)) 

  // Exercise 3: map
  let newUsers = users.map((user) => {
    return {name: user.name, score: user.score};
  });

  console.log(newUsers);


  // Exercise 4: filter
  let activeUsers = users.filter((user) => user.isActive);

  console.log(activeUsers)


  // Exercise 5: sort
  users.sort((a,b) => b.name - a.name);
console.log(users)
  // Exercise 6: reduce

  let avgScore = users.reduce((sum,user ) => sum + user.score, 0) / user.length;
  
  console.log(avgScore)