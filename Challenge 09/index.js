// Challenge 09 Array Methods

const users = [
  {
    displayName: 'Abhishek Ahir',
    employeeNumber: 1996,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Abhishek Patoliya',
    employeeNumber: 1583,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Abhishek Sawant',
    employeeNumber: 2243,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Arkita Kachhadiya',
    employeeNumber: 1615,
    jobtitle: 'Sr. Front-End Engineer',
  },
  {
    displayName: 'Aryan Bharvad',
    employeeNumber: 2028,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Bhavesh Gujjar',
    employeeNumber: 1633,
    jobtitle: 'Software Engineer',
  },
  {
    displayName: 'Deepak Panwar',
    employeeNumber: 2116,
    jobtitle: 'Sr. Front-End Engineer',
  },
  {
    displayName: 'Dixit Pandya',
    employeeNumber: 1875,
    jobtitle: 'Sr. Front-End Engineer',
  },
  {
    displayName: 'Harsh Rana',
    employeeNumber: 1935,
    jobtitle: 'Sr. Front-End Engineer',
  },
  {
    displayName: 'Harshil Ramanuj',
    employeeNumber: 2244,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Hiral Vachhani',
    employeeNumber: 1704,
    jobtitle: 'Sr. Front-End Engineer',
  },
  {
    displayName: 'Karan Saket',
    employeeNumber: 2199,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Kinjal Patel',
    employeeNumber: 1167,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Mayank Loriya',
    employeeNumber: 1389,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Meet Detroja',
    employeeNumber: 1542,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Naimesh Barot',
    employeeNumber: 1877,
    jobtitle: 'Sr. Front-End Engineer',
  },
  {
    displayName: 'Pooja Agarwal',
    employeeNumber: 1794,
    jobtitle: 'Software Engineer',
  },
  {
    displayName: 'Pradip Hirpara',
    employeeNumber: 1334,
    jobtitle: 'Sr. Front-End Engineer',
  },
  {
    displayName: 'Rishabh Saxena',
    employeeNumber: 2200,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Sagar Khanpara',
    employeeNumber: 1131,
    jobtitle: 'Team Manager',
  },
  {
    displayName: 'Sandip Hirapara',
    employeeNumber: 1831,
    jobtitle: 'Software Engineer',
  },
  {
    displayName: 'Sanjay Lowanshi',
    employeeNumber: 2198,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Shubham Nema',
    employeeNumber: 2319,
    jobtitle: 'Front-End Engineer',
  },
  {
    displayName: 'Uday Kumbhani',
    employeeNumber: 2245,
    jobtitle: 'Front-End Engineer',
  },
];

// Using map method create an array containing only displayNames of the users

// Using filter method create an array of users who are senior engineers

// Using reduce method create the sum of employeeNumber of all users

// Bonus: You can chain the array methods so try using map on the filtered array of senior engineers and create and array of their employee numbers



{/* Solution */}
// Using map method create an array containing only displayNames of the users
console.log('Displaying names of all employees')
const newArray = users.map((data) => data.displayName);
console.log(newArray);

// Using filter method create an array of users who are senior engineers
console.log('Displaying array of all Sr. employees form users array')
let senior = users.filter(arraymy => arraymy.jobtitle == 'Sr. Front-End Engineer');
console.log(senior);



// Using reduce method create the sum of employeeNumber of all users
console.log('Displaying sum of all employee number form users array')
let sum = users.reduce((accumulator, currentValue) => accumulator + currentValue.employeeNumber, 0);
console.log(sum);


// Bonus: You can chain the array methods so try using map on the filtered array of senior engineers and create and array of their employee numbers
const seniorEmpNumber = senior.map((data) => data.employeeNumber);
console.log(seniorEmpNumber);


