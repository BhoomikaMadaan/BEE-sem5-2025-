// //using async func in callback


const fs=require("fs")
const io=require("./io")
// fs.readFile("write/data.json","utf8",function(err,data1)
// {
//     if(err) return console.log(err);
//     let users1=JSON.parse(data1);
//        fs.readFile("write/data2.json","utf-8",function(err,data2){
//         if(err) return console.log(err);
//             let users2=JSON.parse(data2);
//             //spread operator
//                //   let allusers=[...users1,...users2];//using the spread  operator 
//                  let allusers=users1.concat(users2);
//            fs.writeFile("./alldata.json",JSON.stringify(allusers),function(err){
//             if(err) return console.log(err);
//               console.log("completed");
                 

//            })
//        })
// })

//using sync methods 

// const fs=require("fs");
// let data1=fs.readFileSync("write/data.json","utf-8");
// let data2=fs.readFileSync("write/data2.json","utf-8");
// let users1=JSON.parse(data1);
// let users2=JSON.parse(data2);
// let allusers=[...users1,...users2];
// try {
//    fs.writeFileSync("./allusersdata.json",JSON.stringify(allusers));
//    console.log("task done");
   
// } catch (error) {
//    console.log(error);
// }

async function task(){
   try{
      let data1=await myread("write/data.json");
      let data2=await myread("write/data2.json");
      let res=[...data1,...data2];
      let message=await mywrite("./alluserdata.json",res);
      console.log(message);

   }
   catch(error){
      console.log(error)
   }
}
task();
console.log("hi");
