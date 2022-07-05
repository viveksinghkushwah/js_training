/*" - Create a function that returns array of employees from a 
random time from 1 to 2 seconds using promise chaining.
*/
let arr=["emp5","emp2","emp1","emp4","emp3",]
    let x=0;
let p = new Promise((resolve,reject)=>{
    
    if ( arr!==undefined){
        setTimeout(function(){
            
            resolve(arr);
            },3000)
        } 
    else{
        setTimeout(function(){
        reject("error");
        },3000)
    }
})
p.then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);
})
/* output [ 'emp5', 'emp2', 'emp1', 'emp4', 'emp3' ] */
/*- Create another promisified function that sorts 
this employee list from above response by name. Chain it to above promise"  */

let a =new Promise((resolve,reject)=>{
 if(arr){    setTimeout(function(){resolve(arr);},4000);}
else{reject();}})
a.then(function(res){
    let arr1=res.sort();
    console.log(arr1);
    
}).catch(function(){
    console.log("array not founf");
})

/* 
output
[ 'emp1', 'emp2', 'emp3', 'emp4', 'emp5' ]
 */