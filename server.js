const people = [
  {
    name: "Jhon",
    age: 25,
    profile: "Tester",
  },
  {
    name: "Smith",
    age: 30,
    profile: "Developer",
  },
  {
    name: "Bravo",
    age: 28,
    profile: "Intern",
  },
  {
    name: "Kiren",
    age: 32,
    profile: "CEO",
  },
];

const names = people.map((item) => {
  return item.name;
});
console.log(names);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);
