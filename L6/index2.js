//data passing and  error handling

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
function buyProduct(product_name,cb){

    //search is product_name available in product array
    //if yes ,then return price
    //if no,return product not available
    for(let i=0;i<products.length;i++)
    {
        if(products[i].name==product_name)
        {
           return cb(null,products[i].price) //returning data exiting the loop

        }
       
    }
    cb("no products found ",null)

}

function pay(amount,cb)
{
  //if product is available,then pay go
  //else return not bought
  if (bank_balance>amount)
  {
    bank_balance=bank_balance-amount;
   return cb(null,"product successfully purchased")
  }
 cb("bank_balance is not sufficient",null)
}

buyProduct("Samsung",function(err,data)
{
   if(err){
    return console.log(err);
   }
   console.log(data);

   pay(data,function(err,msg)
{
    if(err)
        return console.log(err);
    else {
        console.log(msg)
    }
})
})

// FileSystem.readFile(filepath,encoding,function(err,data){

// })


