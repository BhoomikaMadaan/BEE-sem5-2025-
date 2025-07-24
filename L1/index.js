console.log("hello")
function delay()
{
    let currenttime=new Date().getTime()
    while(new Date().getTime()-currenttime <4000)
    {

    }
    console.log("delay done")
}

//delay as a callback
setTimeout(delay,0)
console.log("bye")
function sum(a,b)
{
    console.log(a+b)
}
sum(2,3);
sum(4,5);

//create a function which return a promise to multiply two number ,a and b
//if a >10;
//made promise inside the function to make the func async 
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

//promise will run before setTimeout
multiply(11,6).then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err)
})
