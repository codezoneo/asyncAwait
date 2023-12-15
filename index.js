console.log("person1 : shows ticket");
console.log("person2 : shows ticket");
// const promiseWifeBringTickets = new Promise(function (resolve,reject){
//     setTimeout(function (){
//         resolve(`ticket`)
//     },3000)
// })
// const getBurger = promiseWifeBringTickets.then((t)=>{
//     console.log('husband : we should go in');
//     console.log('wife : No I need butter')
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} burger `)
//     });

// })
// //getBurger.then((t)=>console.log(t))
// const getButter = promiseWifeBringTickets.then((t)=>{
//     console.log('husband : I got some burger');
//     console.log('husband : we should go in');
//     console.log('wife : No I need butter')
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} butter `)
//     });

// })
//     getButter.then((t)=>console.log(t))
 const preMovie = async () => {
    const promiseWifeBringTickets = new Promise(function (resolve,reject){
        setTimeout(function (){
            resolve(`ticket`)
        },3000);
    })
    let getpopCorn = new Promise((resolve,reject)=>{
        resolve('popcorn')
    })
        let ticket =  await promiseWifeBringTickets;
        console.log('husband : we should go in');
    console.log('wife : No I need butter')
      getpopCorn = await getpopCorn;
         
      let getColdDrinks = new Promise((resolve,reject)=>{
        resolve('coldrink')
      })
      let ticket1 = await getColdDrinks;
      console.log('husband : I have got some coldrink')
      console.log('wife : got it ')
    return ticket 
}
 
 preMovie().then((m)=>console.log(m));


console.log("person4 : shows ticket");
console.log("person5 : shows ticket");
 
