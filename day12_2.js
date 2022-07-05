let arr=["emp5","emp2","emp1","emp4","emp3",]
    
function arrr(x){
    return new Promise((resolve,reject)=>{
    
    if ( x!==undefined){
        setTimeout(function(){
                  
            resolve(x);
            },3000)
        } 
    else{
        setTimeout(function(){
        reject("error");
        },3000)
    }
})}
async function fout(y){
    let res = await arrr(y)
    console.log(res)
}

fout(arr);