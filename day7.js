
        let name;
        let Email;
        let age;
        let address;
        let phone_number;
        let gender;
        let marriage_status;
        let arr=[{
                name:"emp1",
                Email:"emp1@gmail.com",
                age:"22",
                address:"Indore",
                phone_number:"111111111",
                gender:"Male",
                marriage_status:"unmarried"},
                {
                name:"emp2",
                Email:"emp2@gmail.com",
                age:"27",
                address:"Indore",
                phone_number:"22222222",
                gender:"Female",
                marriage_status:"married"},
                {
                name:"emp3",
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
        console.log(arr.filter(x=>x.age<50));
//output
/*[
  {
    name: 'emp1',
    Email: 'emp1@gmail.com',
    age: '22',
    address: 'Indore',
    phone_number: '111111111',
    gender: 'Male',
    marriage_status: 'unmarried'
  },
  {
    name: 'emp2',
    Email: 'emp2@gmail.com',
    age: '27',
    address: 'Indore',
    phone_number: '22222222',
    gender: 'Female',
    marriage_status: 'married'
  },
  {
    name: 'emp4',
    Email: 'emp4@gmail.com',
    age: '28',
    address: 'Indore',
    phone_number: '44444444',
    gender: 'Female',
    marriage_status: 'unmarried'
  },
  {
    name: 'emp5',
    Email: 'emp5@gmail.com',
    age: '42',
    address: 'Indore',
    phone_number: '555555555',
    gender: 'Male',
    marriage_status: 'married'
  }
] */