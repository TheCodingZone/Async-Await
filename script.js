console.log("Person01: Shows Ticket");
console.log("Person02: Shows Ticket");

const movie=async ()=>{
  const WifeBrinningTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Ticket");
    },1000);
  })
  
 

  const popcorn=new Promise((resolve,reject)=>{
    resolve(`popcorn`);
});
let ticket=await WifeBrinningTicket;
console.log("WIFE:I HAVE TICKETS");
console.log("HUSBAND:SO WE SHOULD GO IN");
console.log("WIFE:I AM HUNGRY");
let pop=await popcorn;
console.log("HUSBAND:I HAVE SOME POPCORN");
console.log("HUSBAND:NEED ANYTHING ELSE");
console.log("WIFE:I NEED BUTTER FOR MY POPCORN");
const addbutter=new Promise((resolve,reject)=>{
    resolve(`butter`)
});
let butter=await addbutter;
console.log(`HUSBAND:I HAVE SOME ${butter} ON POPCORN`);
console.log("HUSBAND:NEED ANYTHING ELSE");
console.log("WIFE:NO WE SHOULD GO NOW");

const coldDrinks=new Promise((resolve,reject)=>{
    resolve(`Cold Drink`);
});
const drinks=await coldDrinks;
console.log(`HUSBAND:I HAVE SOME ${butter} ON POPCORN AND COLDDRINKS`);
console.log("HUSBAND:NEED ANYTHING ELSE");
console.log("WIFE:NO WE SHOULD GO NOW");




return ticket;

};
movie().then((m)=>{
    console.log(`person3:shows ${m}`);
})
console.log("Person04: Shows Ticket");