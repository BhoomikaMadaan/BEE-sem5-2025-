// //event loop [cpu intensive tasks ]
const fs=require("fs");
console.log("start");
setImmediate(()=>
{
    console.log("immediate 1")
})

setTimeout(()=>
{
    console.log("timer 1")
},0)

fs.readFile("demo.txt","utf-8",(err,data)=>
{
    if(err) return console.log(err);
    console.log(data);

        setImmediate(()=>
    {
        console.log("immediate 2")
    })

    setTimeout(()=>
    {
        console.log("timer 2")
    },0)

    process.nextTick(()=>
    {
        console.log("next tick...2")
    })
})

function fun(){
    console.log("fun");
}
fun();
console.log("end")

// promise code written ini the lecture 1 code :
function multiply(a,b)
{
    return new Promise((resolve,reject) =>{
        if(a>10) 
            {
                return resolve(a*b)
            }
        else {
          reject ("a is less than 10")
        }
    })
}
multiply(11,6).then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err)
})

process.nextTick(()=>{
    console.log("next tick")
})
// console.log("start")

// setTimeout(()=>{
//     console.log("timer 1")
// })
// setImmediate(()=>
// {
//     console.log("immediate 1")
// })

// console.log("end")

//we cannot determine the order between the above two ,depends upon the expiration time of timer ,cpu 