// function starter(cb)
// {

// console.log("Starter is ordered")
//     setTimeout(()=>{
//         console.log("starter served")
//         cb(maincourse)
//     },1000)
// }

// function maincourse(cb)
// {

//     console.log("maincourse is ordered")

//     setTimeout(()=>{
//             console.log("maincourse served")
//             cb(sweets)
//         },1000)


// }


// function sweets(cb)
// {

//     console.log("sweets is ordered")

//     setTimeout(()=>{
//             console.log("sweets served")
//             cb(bill)
//         },3000)


// }


// function bill()
// {

//     console.log("bill is arriving")

//     setTimeout(()=>{
//             console.log("bill paid")
//         },20)


// }


// //1. strater---->maincourse---->sweets---->bill
// starter(maincourse);
// // maincourse();
// // sweets();
// // bill();


//dynamic cb
function starter(cb)
{

console.log("Starter is ordered")
    setTimeout(()=>{
        console.log("starter served")
        cb()
    },1000)
}

function maincourse(cb)
{

    console.log("maincourse is ordered")

    setTimeout(()=>{
            console.log("maincourse served")
            cb()
        },1000)


}


function sweets(cb)
{

    console.log("sweets is ordered")

    setTimeout(()=>{
            console.log("sweets served")
            cb()
        },3000)


}


function bill(cb)
{

    console.log("bill is arriving")

    setTimeout(()=>{
            console.log("bill paid")
            cb()
        },20)


}


//1. strater---->maincourse---->sweets---->bill
// starter(function(){

//     maincourse(function(){

//         sweets(function(){

//             bill(function(){
//                 console.log("finish")
//             })
//         })
//     })
// })
// maincourse();
// sweets();
// bill();

//2. strater-->sweets-->maincourse-->bill
starter(function(){

    sweets(function(){

        maincourse(function(){

            bill(function(){
                console.log("finish")
            })
        })
    })
})
