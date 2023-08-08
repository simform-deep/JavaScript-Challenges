// Challenge 05 Default Parameters

// Building upon the last challenge make changes to the printDetails function such that when there is no value being passed when the function is called then the function should print your details.

// If no value is passed in function call the function should print '"YourFirstName" "YourLastName" is "YourAge" years old and lives in "YourLocation"

function printDetails(fname, lname, age, location) {
  const details = `${fname} ${lname} is ${age} years old and lives in ${location}`;
  console.log(details);
}

printDetails('Abhishek', 'Sawant', 23, 'Vadodara');


/* Solution */
function printDetails(fname = 'YourFirstName', lname = 'YourLastName', age = 'YourAge',  location = 'YourLocation') {
  const details = `${fname} ${lname} is ${age} years old and lives in ${location}`;
  console.log(details);
}

printDetails();
