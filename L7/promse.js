
let p=new Promise ((resolve,reject)=>{

    let age=30
    if(age>18)
        resolve("user is allowed to vote")
    else{
        reject("user is underage")
    }
})
console.log(p);//p is async object

//traditional approach
// p.then(
//     function(data)
//     {
//         console.log("first")
//        console.log(data)
//     },
//     function(err){
//         console.log("second")

//         console.log(err)

//     }
p.then((data)=>{
    console.log(data);
})
.catch((err)=>
{
    console.log(err);
})

console.log("start");
console.log("end");
