let users=[
    {
        id:1,
        name:"BHOOMIKA",
        age:17
    },
    {
        id:2,
        name:"Harshika",
        age:20
    }
]

//promise is used under function
function isAllowed(id){
  return  new Promise((resolve,reject)=>{
    let user=null;
 for(let i=0;i<users.length;i++)
{
    console.log(users[1]);
    if(users[i].id==id){
        user=users[i];
    }
}
    if(!user) return reject("no users found")
    if(user.age<18) return reject("age is less than 18")
    resolve("allowed")

})
}

isAllowed("1").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
console.log("hi")
