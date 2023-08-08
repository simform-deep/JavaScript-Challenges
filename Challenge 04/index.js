// Challenge 04 Destructuring

// Populate the person object with your data and covert the printDetails function to use destructuring and call the function.
// The console output should look like 'Abhishek Sawant is 23 years old and lives in Vadodara'

const person = {
  fname: '',
  lname: '',
  age: 23,
  location: '',
};

function printDetails(person) {
  const firstName = person.fname;
  const lastName = person.lname;
  const age = person.age;
  const location = person.location;
  const details = `${firstName} ${lastName} is ${age} years old and lives in ${location}`;
  console.log(details);
}

printDetails(person);


/* Solution */
const person = {
  fname: 'Abhishek',
  lname: 'Sawant',
  age: 23,
  location: 'Vadodara',
};

function printDetails(person) {
  const { fname, lname, age, location } = person;
  const details = `${fname} ${lname} is ${age} years old and lives in ${location}`;
  console.log(details);
}
printDetails(person);