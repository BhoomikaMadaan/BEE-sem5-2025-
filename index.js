
const express=require ('express')
const app = express()
const path=require("path") //if by mistake, we put extra slash or any mistake in ths syntax of creating path , 
//we use this path module.[it just create path even if file named doesnt exist]

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/users",(req,res)=>{
    res.send("this is a user page")
})

//data sent in the string
app.get("/blocks",(req,res)=>{
    res.send("this is another message")
})

//data sending in html
app.get("/blogs",(req,res)=>{
    res.send("<div><h1>First blog.....</div></h1>")
})

//data sent as file
app.get("/posts",(req,res)=>{
    // res.sendFile("D:\BEE cse\L11\index.html")
    console.log(__dirname+ "/index.html")  
    // res.sendFile(__dirname+ "/index.html")
    res.sendFile(path.join(__dirname,"index.html"))

})

//JSON data 
app.get("/allusers",(req,res)=>{
    let allusers=[{id:1,name:"mikka"},{id:2,name:"shikka"}]
    res.json(allusers);
})



//path variable 
//query parameter
app.get("/profile",(req,res)=>{
    let pathvariable=req.query.id
    let pathvariablename=req.query.name

console.log(req.query)
res.send("profile of  id: "+pathvariable +" having name: " + pathvariablename+ ":)")
})

//2.params
app.get("/profile/:id/name/:username",(req,res)=>{
    let id=req.params.id
    let username=req.params.username
    console.log(req.params)
    res.send("okhay ,got it.your profile id we got is : "+ id + " having name: "+ username)
})


//after port number , there is callback if u want to print some msg
app.listen(3000,()=>{
    console.log("server started...");
})