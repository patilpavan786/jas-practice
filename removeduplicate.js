// using set 

// const myArray = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [...new Set(myArray)];
// console.log(uniqueArray);

// using filter and index of 

// const myArray = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = myArray.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
// console.log(uniqueArray);


//using reduce 

// const myArray = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = myArray.reduce((accumulator, currentValue) => {
//   if (!accumulator.includes(currentValue)) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);
// console.log(uniqueArray);


//Using forEach and an empty object:

//  const myArray = [1, 2, 2, 3, 4, 4, 5,6];
// const uniqueArray = [];
// const map = {};

// myArray.forEach((value) => {
//   if (!map[value]) {
//     uniqueArray.push(value);
//     map[value] = true;
//   }
// });
// console.log(uniqueArray);

//Using ES6 includes and a temporary array:

// const myArray = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [];
// myArray.forEach((value) => {
//   if (!uniqueArray.includes(value)) {
//     uniqueArray.push(value);
//   }
// });
// console.log(uniqueArray);


// console.log("hii")
