// find method

// const scores = [50,20,70,30,45,10,90,60,5];

// const firstHighscore = scores.find(score => score > 50);

// console.log(firstHighscore)

// sort method

// example 1 sorting strings

// const names = ['wisdom','promise','andre','belema','ukor'];

// names.sort();

// console.log(names)





// example 2 sorting numbers 

// const scores = [10, 50, 20, 5, 10, 80, 50];

// scores.sort((a,b) => a - b);

// console.log(scores);


// example 3 sorting objects

// const players = [
//     {name:'wisdom', score:20},
//     {name:'promise', score:30},
//     {name:'andre', score:80},
//     {name:'belema', score:10},
//     {name:'ukor', score:70},
// ];

// players.sort((a,b)=>{

//     if(a.score > b.score){

//         return -1;

//     }else if(b.score > a.score){

//         return 1;
        
//     }else{

//         return 0;
//     }

// });

// players.sort((a,b )=>a.score - b.score);

// console.log(players)


const products = [
    {name:'eva soap',  price: 20},
    {name:'noodles',  price: 10},
    {name:'bottle water',  price: 40},
    {name:'cream',  price: 5},
    {name:'oil',  price: 50}
];

// const filtered = products.filter(product => product.price > 20);

// const promo = filtered.map(product => {
//     return `the ${product.name} is  ${product.price / 2} pounds`;
// });

const promos = products
.filter(product => product.price > 20)
.map(product => `the ${product.name} is  ${product.price / 2} pounds`)

console.log(promos)
document.write(promos)