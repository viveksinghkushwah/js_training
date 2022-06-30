//create a json file and import it and assign a new id to each entry
const empdata=require('./q1.json');
for(let x=1;x<=empdata.employees.length;x++){
    empdata.employees[x-1].id=x;
}
console.log(empdata.employees);
// output
/* [
  {
    name: 'emp1',
    Email: 'emp1@gmail.com',
    age: '22',
    address: 'Indore',
    phone_number: '111111111',
    gender: 'Male',
    marriage_status: 'unmarried',
    id: 1
  },
  {
    name: 'emp2',
    Email: 'emp2@gmail.com',
    age: '27',
    address: 'Indore',
    phone_number: '22222222',
    gender: 'Female',
    marriage_status: 'married',
    id: 2
  },
  {
    name: 'emp3',
    Email: 'emp3@gmail.com',
    age: '72',
    address: 'Indore',
    phone_number: '33333333',
    gender: 'Male',
    marriage_status: 'married',
    id: 3
  },
  {
    name: 'emp4',
    Email: 'emp4@gmail.com',
    age: '28',
    address: 'Indore',
    phone_number: '44444444',
    gender: 'Female',
    marriage_status: 'unmarried',
    id: 4
  },
  {
    name: 'emp5',
    Email: 'emp5@gmail.com',
    age: '42',
    address: 'Indore',
    phone_number: '555555555',
    gender: 'Male',
    marriage_status: 'married',
    id: 5
  }
]
 */