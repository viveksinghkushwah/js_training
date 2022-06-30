const empdata=require('./q3.json');
for(let x=1;x<=empdata.employees.length;x++){
    empdata.employees[x-1].salary=(empdata.employees[x-1].salary/100000).toFixed(1)+"Lacks";
}
console.log(empdata.employees);

/* [
  {
    name: 'emp1',
    Email: 'emp1@gmail.com',
    age: '22',
    address: 'Indore',
    phone_number: '111111111',
    gender: 'Male',
    marriage_status: 'unmarried',
    salary: '5.0Lacks'
  },
  {
    name: 'priyam',
    Email: 'emp2@gmail.com',
    age: '27',
    address: 'Indore',
    phone_number: '22222222',
    gender: 'Female',
    marriage_status: 'married',
    salary: '7.5Lacks'
  },
  {
    name: 'amreek',
    Email: 'emp3@gmail.com',
    age: '72',
    address: 'Indore',
    phone_number: '33333333',
    gender: 'Male',
    marriage_status: 'married',
    salary: '7.6Lacks'
  },
  {
    name: 'emp4',
    Email: 'emp4@gmail.com',
    age: '28',
    address: 'Indore',
    phone_number: '44444444',
    gender: 'Female',
    marriage_status: 'unmarried',
    salary: '8.7Lacks'
  },
  {
    name: 'emp5',
    Email: 'emp5@gmail.com',
    age: '42',
    address: 'Indore',
    phone_number: '555555555',
    gender: 'Male',
    marriage_status: 'married',
    salary: '9.9Lacks'
  }
]
*/ 