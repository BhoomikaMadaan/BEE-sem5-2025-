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

let bank_balance=1000000;
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
   return resolve("product successfully purchased")
  }
 reject("bank_balance is not sufficient")

    })
  //if product is available,then pay go
  //else return not bought
  
}

function add(a,b){
    return a+b;
}

async function purchase(){
    try {
    let amount=await buyProduct("gig")
    console.log(amount)
    let message=await pay(amount)
    console.log(message)
        
    } catch (error) {
        console.log(error)
    }

}

let pur=purchase()
// console.log(pur)
let re=add(2,4)
console.log(re)
console.log("hello world!!")
