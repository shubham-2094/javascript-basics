// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// };

//  console.log(fruitProcessor(2, 5));

// const calAge = (year) => {
//   return 2022 - year;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calAge(birthYear);
//   const retirement = 60 - age;
//   //   return retirement;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1994, "Shubham"));
// console.log(yearsUntilRetirement(1960, "Ajjoba"));

// const calAvreage = (a, b, c) => (a + b + c) / 3;
// console.log(calAvreage(10, 20, 30));

// // test1
// const scoreDolphins = calAvreage(44, 23, 71);
// const scoreKoalas = calAvreage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(
//       `team Dolphins wins the trophy(${avgDolphins} vs ${avgKoalas}})`
//     );
//   }
//   if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`team Koals wins the trophy(${avgDolphins} vs ${avgKoalas}})`);
//   } else {
//     console.log(`No one wins the trophy`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ["Shubham", "Mandar", "Kiran"];
// const year = new Array(1994, 1997, 1996);
// console.log(friends.length);
// console.log(friends[0]);
// console.log(year);
// console.log(friends[friends.length - 1]);
// friends[0] = "Pushpak";
// console.log(friends);

// const firstName = "Shubham";
// const shubham = [
//   firstName,
//   "Patil",
//   2022 - 1994,
//   "Software Development Engineer",
//   friends,
// ];
// console.log(shubham, shubham.length);

// const calAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1997, 1994, 2001, 1996];
// const age1 = calAge(years[0]);
// const age2 = calAge(years[2]);

// const age3 = calAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calAge(years[0]),
//   calAge(years[2]),
//   calAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Shubham", "Mandar", "Kiran"];
// const newLength = friends.push("Kalpesh");
// friends.unshift("Mayur");
// console.log(friends, newLength);
// const popped = friends.pop();
// friends.shift();
// console.log(friends, popped);
// console.log(friends.indexOf("Shubham"));
// console.log(friends.indexOf("Himani"));
// friends.push(22);
// console.log(friends.includes("Shubham"));
// console.log(friends.includes("Himani"));

const calTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [125, 555, 44];
const tip = [calTip(bills[0]), calTip(bills[1]), calTip([bills[2]])];
const totals = [bills[0] + tip[0], bills[1] + tip[1] + bills[2] + tip[2]];
console.log(bills, "bill", tip, "tip", totals, "total");
