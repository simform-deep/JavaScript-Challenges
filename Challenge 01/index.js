// Challenge 01 Template Literals

// Using the below variables in a template literal make a string 'Today's date is 23rd July 2023, temprature today will be 32 Celcius and weather will be Cloudy'
const day = '23rd July 2023';
const temprature = '32 Celcius';
const weather = 'Cloudy';
console.log(`Today's date is ${day}, temprature today will be ${temprature} and weather will be ${weather}`);


{/* Solution */}
// Now instead of using static variables use a make a function that accepts day, temprature and weather as parameters and print the same string using a function
function printString() {
  let day = prompt("Please enter Today's date in dd-mmmm-yyyy format");
  let temprature = prompt("Please enter Today's temprature");
  let weather = prompt("Please enter Today's weather");
  console.log(`Today's date is ${day}, temprature today will be ${temprature} Celcius and weather will be ${weather}`);
}
printString();

{/* Solution */}
// Bonus challenge: Instead entering the date manually use the JavaScript Date Object (MDN LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to get the date and pass it to the function.
function getTodayDate() {
  const date = new Date();
  let days = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  const temprature = '32 Celcius';
  const weather = 'Cloudy';
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log(`Today's date is ${days} ${monthNames[month]} ${year}, temprature today will be ${temprature} and weather will be ${weather}`)
}
getTodayDate();
