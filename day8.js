//create a function that displays all the even numbers upto the input
function evennum(x){
    let text=""
    for(let a=0;a<=x;a++)
    {
        if (a%2==0){
            text+= a+" ";
        }
    }
    return console.log(text);
}
evennum(17);

//output
/*0 2 4 6 8 10 12 14 16 */ 


//write a function to take two input of empoyee and  a number and display all the employee less than that age
y=[]
 function agefilter(a,b){
    y= a.filter(a => a.age>b);
    return y;
 }
 let name;
 let age;
 x=[{name:"vivek",age:22},{name:"aa",age:12},{name:"bb",age:7},{name:"ccc",age:14},];
 agefilter(x,10)
 console.log(y)
 /*
 output[
  { name: 'vivek', age: 22 },
  { name: 'aa', age: 12 },
  { name: 'ccc', age: 14 }
] */

 //create a function which take two input fist the array of emplyee data second the attribute for sorting

 let salary;
employeedata=[{name:"vivek",age:22,salary:20000},
                {name:"aa",age:12,salary:12500},
                {name:"bb",age:7,salary:45058},
                {name:"ccc",age:14,salary:25000},];
 function sortdata(w,e){
if (e=="age"){
    let neww=w.sort(function(a,b){return a.age - b.age})   ;
    console.log(neww);
}
else if (e=="salary"){
    neww=w.sort(function(a,b){return a.salary - b.salary})   ;
    console.log(neww);
}
else
{
    neww=w.sort(function(a,b){
        if(a.name>b.name)
        {
            return 1;
        } 
    
        if(a.name<b.name){
            return -1;
        }
    return 0;})
}
 }

 q="salary";
 sortdata(employeedata,q)
 console.log(neww);
 /*output
 [
  { name: 'aa', age: 12, salary: 12500 },
  { name: 'vivek', age: 22, salary: 20000 },
  { name: 'ccc', age: 14, salary: 25000 },
  { name: 'bb', age: 7, salary: 45058 }
]
 */