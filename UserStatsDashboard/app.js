const users = [
  { name: "Alice", age: 25, isActive: true, scores: [80, 85, 90] },
  { name: "Bob", age: 17, isActive: false, scores: [60, 70, 65] },
  { name: "Charlie", age: 30, isActive: true, scores: [95, 88, 92] },
  { name: "Diana", age: 22, isActive: false, scores: [75, 80, 78] },
];

//For loop to caliculate averrage score
let total = 0;
for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < users[i].scores.length; j++) {
    total += users[i].scores[j]; //aithmetic and assignment
  }
  const avg = total / users[i].scores.length;
  console.log(`${users[i].name}'s average score is ${avg}`);
}

//while - print names of active users
let index = 0;
while (index < users.length) {
  if (users[index].isActive) {
    console.log(`${users[index].name} is active`);
  }
  index++; //increment operator
}

//do while - checking user name
let i = 0;
do {
  console.log(`Checking user: ${users[i].name}`);
  i++;
} while (i < users.length);

//for ....of loop show user age catogiries
for (let user of users) {
  let category = "";
  //ternery operator
  category = user.age >= 18 ? "adult" : "minor";
  console.log(`${user.name} is an ${category}`);
}

//for in
console.log(`--------------------`);
for (let user of users) {
  console.log(`${user.name} details`);
  for (let key in user) {
    console.log(`key: ${key} has value: ${user[key]}`);
  }
  console.log(`--------------------`);
}

//if else if else
users.forEach((user) => {
  let age = user.age;
  if (age < 18) {
    console.log(`${user.name} is underaged`);
  } else if (age >= 18 && age <= 25) {
    console.log(`${user.name} is a young adult`);
  } else {
    console.log(`${user.name} is an adult`);
  }
});

//switch based on first letter of name
users.forEach((user) => {
  switch (user.name[0]) {
    case "A":
      console.log(`${user.name} starts with A`);
      break;
    case "B":
      console.log(`${user.name} starts with B`);
      break;
    default:
      console.log(`${user.name} has an unique start`);
      break;
  }
});
