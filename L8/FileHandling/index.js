const fs=require("fs")
// console.log(fs)


//write
//you are creating a function , "writefile()"
// fs.writeFile("./data.txt","hi",function(err){
//     if(err) return console.log(err)
//         console.log("data written")
// })

// fs.writeFile("./demo.txt","",function(err){
//     if(err) return console.log(err)
//         console.log("data written")
// })

// fs.appendFile("./data.txt","BHoomika",function(err){
//     if(err) return console.log(err)
//         console.log("updated")
// })

//read functions
// fs.readFile("./data.txt","utf-8",function(err,data){
//     if(err) return console.log(err)
//         console.log(data)
// })


//         fs.writeFile("./alldata.txt",data,function(err,data){
//             if(err)return console.log(err)
//                 console.log(data)
//             })
// })

    
// })


//to read the two files and write the combines files data ni the alldata.txt
fs.readFile("./data.txt","utf-8",function(err,data1){
     if(err) return console.log(err)
       fs.readFile("./demo.txt","utf-8",function(err,data2){
           if(err) return console.log(err)
        // console.log(data)
             fs.writeFile("./alldata.txt",data1+data2,function(err)
                {
                    if(err)return console.log(err)
                        console.log("task completed")
                })
       })
    })
