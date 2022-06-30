let info=[{
    name:"emp1",
    Email:"emp1@gmail.com",
    age:"22",
    address:"Indore",
    phone_number:"111111111",
    gender:"Male",
    marriage_status:"unmarried"},
    {
    name:"priyam",
    Email:"emp2@gmail.com",
    age:"27",
    address:"Indore",
    phone_number:"22222222",
    gender:"Female",
    marriage_status:"married"},
    {
    name:"amayra",
    Email:"emp3@gmail.com",
    age:"72",
    address:"Indore",
    phone_number:"33333333",
    gender:"Male",
    marriage_status:"married"},
                            
    {
    name:"emp4",
    Email:"emp4@gmail.com",
    age:"28",
    address:"Indore",
    phone_number:"44444444",
    gender:"Female",
    marriage_status:"unmarried"
    },
    {
    name:"emp5",
    Email:"emp5@gmail.com",
    age:"42",
    address:"Indore",
    phone_number:"555555555",
    gender:"Male",
    marriage_status:"married"}        

    ];
function namefilter(y){
let x =y.filter(y=>y.name.includes("am"));
return( x);
}

console.log( exdata= namefilter(info))
/* [
  {
    name: 'priyam',
    Email: 'emp2@gmail.com',
    age: '27',
    address: 'Indore',
    phone_number: '22222222',
    gender: 'Female',
    marriage_status: 'married'
  },
  {
    name: 'amayra',
    Email: 'emp3@gmail.com',
    age: '72',
    address: 'Indore',
    phone_number: '33333333',
    gender: 'Male',
    marriage_status: 'married'
  }
]
*/