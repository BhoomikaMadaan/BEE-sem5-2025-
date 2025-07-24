let products=[
    {
        id:1,
        name:'Iphone15 Pro',
        price:100000
    },
    {
        id:2,
        name:"Samsung",
        price:80000
    }
]

let bank_balance=10;
function buyProduct(product_name){
return new Promise((resolve,reject)=>{

    for(let i=0;i<products.length;i++)
    {
    console.log(products[1]);
        if(products[i].name==product_name){
            return resolve(products[i].price)
    }
    }
    return reject("no products found ",null)
    //returning data exiting the loop


})
   
}

function pay(amount)
{
    return new Promise((resolve,reject)=>{
    if (bank_balance>amount)
  {
    bank_balance=bank_balance-amount;
   return resolve(null,"product successfully purchased")
  }
 reject("bank_balance is not sufficient",null)

    })
  //if product is available,then pay go
  //else return not bought
  
}




buyProduct("Samsung")
.then((data)=>{
    console.log(data)

  return  pay(data)
})
.then((message)=>{
    console.log(message)
})
.catch((err)=>
{
    console.log(err)
})


//to run asynch code in sync method in a good manner(written in synch syntacx)=>async/await syntax