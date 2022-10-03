
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); 

// JSON Method
let date = new Date().toJSON();
console.log(date); // 2022-06-17T11:06:50.369Z

// // Since we want only the current date, we can use the slice() method this way to get the first 10 characters:
let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate); // 

// Suppose we want the time in Germany:
let date = new Date().toLocaleDateString("de-DE");
console.log(date); 