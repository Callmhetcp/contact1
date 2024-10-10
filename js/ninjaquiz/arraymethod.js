// filtermethod

// const scores =[20,30,10,15,40,45,5,50];

// const filteredScores = scores.filter((score)=>{
//     return score > 20;

// });

// console.log(filteredScores);

// const users =[
//     {name:'wisdom',premium:true},
//     {name:'promise', premium:false},
//     {name:'bobby', premium:false},
//     {name:'thonia', premium:true}
// ];

// const premuimUsers = users.filter(user => user.premium)
// console.log(premuimUsers)

// map method

// const prices = [20,10,30,5,15,10,80,25,5];

// // const salesPrices = prices.map(sale => sale / 2);
// // console.log(salesPrices)

// const products =[
//     {name:'indomie', prices:20},
//     {name:'kings oil', prices:10},
//     {name:'pasta', prices:5},
//     {name:'custard', prices:30},
//     {name:'klin', prices:50}
// ];

// const salesProduct = products.map(product =>{
//     if(product.prices > 30){
//         return {name:product.name,prices: product.prices / 2};
//     }else{
//         return product;
//     }
// });

// console.log(salesProduct)

// reduce method

// const score = [10,20,10,70,60,90,35,40];

// const result = score.reduce((pass,store) =>{

//     if (store > 50) {
        
//         pass ++;
//     }
//     return pass;

// },0);

// console.log(result);

const scores = [
    {player:'promise', score:30},
    {player:'bobby', score:60},
    {player:'promise', score:80},
    {player:'stanley', score:70},
    {player:'promise', score:30},
    {player:'bobby', score:60},
    {player:'promise', score:80},
    {player:'stanley', score:70},
    {player:'promise', score:30},
    {player:'bobby', score:60},
    {player:'promise', score:100},
    {player:'stanley', score:70},
    {player:'promise', score:30},
    {player:'bobby', score:60},
    {player:'promise', score:90},
    {player:'stanley', score:70}
];

const promiseTotal = scores.reduce((add,curr)=>{

    if (curr.player==='promise') {

        add+=curr.score;
        
    }
    return add;
},0);

console.log(promiseTotal)

