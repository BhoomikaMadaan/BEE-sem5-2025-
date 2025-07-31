const fs = require("fs");

function myread(filePath) {
    return new Promise ((resolve,reject)=>{
        fs.readFile(filePath,"utf-8",function(err,data){
            if(err) return reject(err);
            let output=JSON.parse(data);
            resolve(output);
        })
    })
}

// Write data as JSON to file, returns a Promise
function mywrite(filePath, data) {
     return new Promise ((resolve,reject)=>{
        let res=JSON.stringify(data);
        fs.readFile(filePath,res,function(err){
            if(err) return reject(err);
           
            resolve("done");
        })
    })
}

module.exports={
    myread,
    mywrite
};
