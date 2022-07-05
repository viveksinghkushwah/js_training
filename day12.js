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



let a =new Promise((resolve,reject)=>{
 if(arr){    setTimeout(function(){resolve(arr);},4000);}
else{reject();}})
a.then(function(res){
    let arr1=res.sort();
    console.log(arr1);
    
}).catch(function(){
    console.log("array not founf");
})