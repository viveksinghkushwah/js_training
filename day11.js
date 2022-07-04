/*" - Divide the employee age by null and handle the error.
 Also if the error occurs divide the age by 2 and print it.
*/
let Employee={ 
    name:"vivek",
    age:22,
    address:"indore",
    mobile:8305260334
}

try{
    let c=Employee.age/NaN;
    if (isNaN(c)){
        throw "NaN value";
    }


}
catch (err){
console.log("Error "+err);
}
finally{
    console.log("Age after deviding by 2 :"+ Employee.age/2);
}
//output
/*
Error NaN value
Age after deviding by 2 :11 */


/*- Create a function that prints numbers from m to n after 100ms each. 
m and n should be taken as paramter in function"
*/
let x=100;
let m=10;
let n=19;
aaa(m,n)
function aaa(a,b){
for (var i = a; i <= b; i++){
    print(i,x);
    x+=100;
    
}
}
function print(i,y) {
    setTimeout(function(){
        console.log(i)
    },y);
}

/*
output
10
11
12
13
14
15
16
17
18
19 */