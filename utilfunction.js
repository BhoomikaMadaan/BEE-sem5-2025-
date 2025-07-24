function sub(a,b)
{
    return a-b;
}

function add(a,b)
{
    return a+b;
}

function mul(a,b)
{
    return a*b;
}

//creating object in js 
// let obj={
//     a:"hi",
//     b:10
// }
// obj.c=30;//creating another field in the object directly by using the "." operator
// console.log(obj);
// console.log(add(1,8));

console.log("util",module.exports);//it will return the empty object as we didnt assign it smthin...
module.exports.add=add;//adding the add function to the object 
module.exports.sub=sub;
module.exports.mul=mul;
console.log("util",module.exports)

//another way to export[not a good approach ,as it replaces the value of module exports with that object,,also chnage the reference
//of the module exports ..suppose there might be some ambigious issue occured before the "mul",then the whole object will not be formed ...
//any file that will require that function, will get the empty object ..]
// module.exports={
// add,
// sub,
// mul
// }