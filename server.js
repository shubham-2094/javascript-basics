// import fetch from "node-fetch";

// const people = [
//   {
//     name: "Jhon",
//     age: 25,
//     profile: "Tester",
//   },
//   {
//     name: "Smith",
//     age: 30,
//     profile: "Developer",
//   },
//   {
//     name: "Bravo",
//     age: 28,
//     profile: "Intern",
//   },
//   {
//     name: "Kiren",
//     age: 32,
//     profile: "CEO",
//   },
// ];

// const age = people.map((item) => {
//   return item.age;
// });
// console.log(age);

// const newPeople = people.map((item) => {
//   return item.name.toLowerCase();
// });
// console.log(newPeople);

// const menu = [
//   {
//     name: "eggs",
//     category: "breakfast",
//   },
//   {
//     name: "apple",
//     category: "fruits",
//   },
//   {
//     name: "orange",
//     category: "fruits",
//   },
//   {
//     name: "pohe",
//     category: "breakfast",
//   },
//   {
//     name: "paneer",
//     category: "lunch",
//   },
//   {
//     name: "rice",
//     category: "lunch",
//   },
// ];

// const menuCard = ["all", ...new Set(menu.map((item) => item.category))];
// console.log(menuCard);

// const data = menu.map((item) => {
//   return item.name;
// });
// console.log(data);

// for (let index = 0; index <= 10; index++) {
//   console.log("hii", index);
// }

// const num = 2 + 2;
// console.log("num", num);

// console.log(2 + num);
// console.log(num + num);
// console.log(num - num, "ans");
// console.log(num + num + 10);

// let userName = "Shubham";
// console.log(userName);

// let radius = 5;
// const pi = 3.14;
// let area = radius * radius * pi;
// console.log("circle area", area);
// let num1 = 5 / 0;
// console.log("result", num1);
// console.log(Number.MAX_VALUE);

// let user = "Na vin\n Reddy";
// console.log(user);

// ************************* Type Conversion ***************************
// const product = 123;
// let product2 = String(123);
// let productList = Number("123");
// console.log(product, typeof product);
// console.log(product2, typeof product2);
// console.log(productList, typeof productList);

// ************************* Type Coersion ***************************

//

// let data = "pen";
// let data2 = "book";
// let result = data < data2;
// console.log(result);

// ##############(==) checks only data (===) checks data and data types##############

// let num1 = 10;
// let num2 = 8;
// let num3 = 45;

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greater");
// } else if (num2 > num3) {
//   console.log("num3 is greater");
// } else {
//   console.log("Can't identify");
// }

// let num4 = 8;
// let result = num1 % 2 ? "Even" : "Odd";
// // ################## ternary operator Condition Quetion mark condition1 : Condition2 #############
// console.log(result);

// let day = "Holiday";

// switch (day) {
//   case "Monday":
//     console.log("7am");
//     break;
//   case "Tuesday":
//     console.log("7am");
//     break;

//   case "Wednesday":

//   case "Thrusday":

//   case "Friday":
//     console.log("8am");
//     break;

//   case "Saturday":
//   case "Sunday":
//     console.log("9pm");
//     break;
//   default:
//     console.log("Learn new things and make your self better");
// }
// console.log("Ho gaya week Khatam");

// let i = 1;

// while (i <= 5) {
//   console.log("Hi Himani", i);
//   i++;
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("Hi Shubham", i);
//   for (let j = 1; j <= 5; j++) console.log("Love coding");
// }

// const num = 10;
// const num2 = 5;
// const result = num * num2;
// console.log(`Multiplication of ${num} and ${num2} is ${result}`);
// console.log("Multiplication of 10 and 5 is 50");

// let num = 1;
// for (let num = 1; num <= 100; num++) {
//   console.log("num", num);
// }

// let num = 584545564851369710;
// while (num > 0) {
//   num = parseInt(num / 10);
//   //   console.log(num);
//   console.log(num % 10, "num");
// }

// let number = 123456789;
// let result = 0;
// while (number > 0) {
//   rightmost = number % 10;
//   console.log("right", rightmost);
//   result = result * 10 + rightmost;

//   number = Math.floor(number / 10);
// }
// console.log("Reveresd number is ", result);
// let input = "name";

// let alien = {
//   name: "Shubham",
//   profile: "Devloper",
//   laptop: {
//     brand: "lenovo",
//     color: "grey",
//     processor: "i5",
//   },
// };

// delete alien.laptop;
// console.log(alien);

// for (let key in alien) {
//   console.log(key, alien[key]);
// }

// function greet() {
//   return "hello world";
// }
// let str = greet();
// console.log(str);

// function greetings(user, userName) {
//   return `Hello ${user} ${userName}`;
// }
// let user = "Shubham";
// let userName = "Patil";
// let string = greetings(user, userName);
// console.log(string);

// let add = function (num1, num2) {
//   return num1 + num2;
// };

// let result = add(5, 15);
// console.log(result);

// function yourName(u) {
//   return `Hello ${u}`;
// }
// const code = "Coder";
// const strings = yourName(code);
// console.log(strings);

// const laptopOne = {
//   name: "HP",
//   processor: "i5",
//   ram: "16gb",

//   greet: function () {
//     return console.log(this.processor);
//   },
// };

// const laptopTwo = {
//   name: "HP",
//   processor: "i7",
//   ram: "8gb",

//   greet: function () {
//     return console.log(this.processor);
//   },
// };
// laptopTwo.greet();

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.map((elemet) => {
//   return elemet + 30;
// });
// console.log(newArr);

// let frnds = ["Shuham", "Pushapk", "Mandar", "Kiran", "Sagar", "Tushar"];

// let filterFrnd = frnds.filter((item) => {
//   frnds.item === "Shubham";
// });
// console.log(filterFrnd);

// function getFasterLaptop(Laptop1, Laptop2) {
//   if (Laptop1.ram > Laptop2.ram) {
//     console.log(Laptop1);
//   } else {
//     console.log(Laptop2);
//   }
// }

// const laptop1 = {
//   brand: "HP",
//   ram: 16,
//   cpu: "i5",

//   getConfig: function () {
//     console.log(this.ram);
//   },
// };

// const laptop2 = {
//   brand: "HP",
//   ram: 8,
//   cpu: "i7",

//   compare: function () {
//     if (laptop1.ram > laptop2.ram) {
//       console.log(laptop1);
//     } else {
//       console.log(laptop2);
//     }
//   },

//   getConfig: function () {
//     console.log(this.ram);
//   },
// };

// laptop2.compare(laptop1);

// getFasterLaptop(laptop1, laptop2);

// function Alien(name, tech, salary) {
//   (this.name = name), (this.tech = tech), (this.profile = salary);
//   this.work = function () {
//     console.log("Resolve issues in 12 hrs");
//   };
// }

// let alienOne = new Alien("Shubham", "JavaScript", 20000);
// let alienTwo = new Alien("Mandar", "FullStack", 27000);
// let alienThree = new Alien("Shubham", "PHP", 25000);

// alienOne.tech = "FullStack Developer Soon";

// console.log("alienOne", alienOne);
// alienOne.work();

// const arr = ["Shubham", "Kiran", "Mandar"];
// // arr.push("Sagar");
// // arr.pop();
// arr.unshift("Himani");
// arr.shift();
// console.log(arr);

// let nums = [15, 18, 89, 60, 20, 23, 97, 87, 45, 24, 12, 14];

// for (let n of nums) {
//   console.log(n);
// }

// const people = [
//   {
//     name: "Shubham",
//     age: 28,
//     profile: "Software Developer",
//   },
//   {
//     name: "Himani",
//     age: 25,
//     profile: "Software Analyst",
//   },
//   {
//     name: "Pritam",
//     age: 26,
//     profile: "Pharmasist",
//   },
//   {
//     name: "Dj",
//     age: 30,
//     profile: "Sr.Software Developer",
//   },
// ];

// const person = people.map((item) => {
//   return {
//     firstName: item.name.toUpperCase(),
//     age: item.age,
//   };
// });
// console.log(person);

// const names = people.map((item) => `<h2>${item.name}</h2>`);
// const result = document.querySelector("#result");

// result.innerHTML = names.join();

// const menu = [
//   {
//     name: "Pohe",
//     category: "Breakfast",
//   },
//   {
//     name: "Bhaji-Poli",
//     category: "Lunch",
//   },
//   {
//     name: "Upma",
//     category: "Breakfast",
//   },
//   {
//     name: "Non-veg",
//     category: "Dinner",
//   },
//   {
//     name: "Puranpoli",
//     category: "Lunch",
//   },
//   {
//     name: "Paneer",
//     category: "Dinner",
//   },
// ];

// const menuList = [
//   "brunch",
//   "tea break",
//   ...new Set(
//     menu.map((item) => {
//       return item.category;
//     })
//   ),
// ];
// console.log(menuList);

// let appState = "loading";
// let keyname = "Computer";
// appState = "error";

// const app = {
//   [appState]: true,
// };
// app[keyname] = "apple";
// console.log(app);

// const state = {
//   name: "",
//   profile: "",
//   salary: "",
// };

// function updateState(key, value) {
//   state[key] = value;
// }
// updateState("name", "Shubham");
// updateState("profile", "Developer");
// updateState("salary", 83000);

// console.log(state);

// const people = [
//   {
//     name: "Bob",
//     age: 20,
//     position: "Developer",
//   },
//   {
//     name: "Peter",
//     age: 25,
//     position: "Designer",
//   },
//   {
//     name: "Susy",
//     age: 30,
//     position: "The Boss",
//   },
//   {
//     name: "Anna",
//     age: 35,
//     position: "Intern",
//   },
// ];

// const youngPeople = people.filter((item) => {
//   return item.age < 30;
// });
// console.log(youngPeople);

// const profile = people.filter((item) => {
//   return item.position === "Developer";
// });
// console.log(profile);

// const staff = [
//   {
//     name: "Bob",
//     age: 20,
//     position: "Developer",
//     salary: 100,
//   },
//   {
//     name: "Peter",
//     age: 25,
//     position: "Designer",
//     salary: 300,
//   },
//   {
//     name: "Susy",
//     age: 30,
//     position: "The Boss",
//     salary: 400,
//   },
//   {
//     name: "Anna",
//     age: 35,
//     position: "Intern",
//     salary: 10,
//   },
// ];

// const income = staff.reduce((initial, total) => {
//   console.log("total", initial);
//   console.log("initial", total.salary);
//   initial += total.salary;
//   return initial;
// }, 0);
// console.log("income", income);

// const cart = [
//   {
//     title: "Samsung Galaxy S7",
//     price: 599.9,
//     amount: 1,
//   },
//   {
//     title: "Google Pixcel",
//     price: 499.9,
//     amount: 2,
//   },
//   {
//     title: "Vivo V27",
//     price: 399.9,
//     amount: 4,
//   },
//   {
//     title: "iPhone 14",
//     price: 799.9,
//     amount: 6,
//   },
// ];

// let total = cart.reduce(
//   (total, cartItem) => {
//     const { price, amount } = cartItem;
//     total.totalItem += amount;
//     total.cartItem += amount * price;
//     return total;
//   },
//   {
//     totalItem: 0,
//     cartItem: 0,
//   }
// );
// console.log(total);
/*
const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log("data.length", data.length);
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }

    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log("New Data", newData);
};
fetchRepos();


const fruit = ["apple", "orange", "banana", "mango", "pear"];

const fruit1 = fruit[1];
const fruit0 = fruit[0];
const fruit3 = fruit[3];

console.log(fruit1, fruit0, fruit3);

const friends = ["Mandar", "Pushpak", "Sagar", "Tushar", "Geet", "Kiran"];

const [Car, , Cycle, , Man, Apple] = friends;

console.log(Apple, Man, Cycle, Car);

// let first = "Bob";
// let second = "Jhon";

// let temp = second;
// second = first;
// first = temp;
// console.log(first, second);

// [second, first] = [first, second];
// console.log(first, second);

const bob = {
  first: "Smith",
  last: "sander",
  city: "chicago",
  sibling: {
    sister: "jane",
  },
};
const last = "some value";
const {
  first,
  sibling,
  city,
  last: shake,
  sibling: { sister: anna },
} = bob;--
console.log(sibling, first, city, shake, anna);

function peronName({ first, last, city, sibling: { sister: favorite } }) {
  console.log(first, last, city, favorite);
}
peronName(bob);


const fruits = ["apple", "mango", "orange", "banana", "pear"];

const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);

const specificFruit = restOfTheFruits.find((item) => item === "orange");
console.log(specificFruit);

const person = { name: "shubham", job: "developer", city: "mumbai" };
const { name, ...rest } = person;
console.log(name, rest);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);

  const testAverage =
    scores.reduce((number, value) => {
      return (number += value);
    }, 0) / scores.length;
  console.log(testAverage);
};
const testScore = [80, 90, 85, 78];
getAverage(person.name, ...testScore);


const udemy = "React Development";

const letter = [...udemy];

const boys = ["mandar", "shubham", "sagar", "tushar"];

const girls = ["himani", "priyanka", "nidhi", "sanjana"];

const bestFriend = ["pushpak"];

const group = [...boys, ...bestFriend, ...girls];
console.log(group);

const newFriends = [...group];
newFriends[0] = "nikita";
console.log("group", group);
console.log("newFriends", newFriends);


const udemy = "udemy";

console.log(Array.from(udemy));

const text = document.querySelectorAll(".text");
const newText = Array.from(text).find((item) => item.textContent === "person");
console.log(newText);

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

const textPage = 14;
const page = Math.round(items.length / textPage);
console.log(page);

const newItems = Array.from({ length: page }, (_, index) => {
  const start = index * textPage;
  const tempItems = items.slice(start, start + textPage);
  return tempItems;
});
console.log("newItems", newItems);
*/

const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  { name: "peter", location: { street: "123 Pine street" } },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: "+9:00" } },
  },
];

people.forEach((item) => {
  console.log(
    item?.location?.timezone?.offset || "nahi hai bhai value aage ja"
  );
  // console.log(
  //   item.location && item.location.timezone && item.location.timezone.offset
  // );
});
