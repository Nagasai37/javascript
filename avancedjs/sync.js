console.log("start")
console.log("learing the js")
console.log("startmay bnbe inthe ")
console.log("learing the js")

//asynchronuous
console.log("start");
setTimeout(()=>{
    console.log("hello")

},2000);
console.log("end");

//setimeout():execute a function once after a
//specified delay 
// `
// synatx:
// settimeout(function(){
// //code
// },delay);

//example:
setTimeout(function(){
    console.log("hello students")
},3000);


//counter eg:
let count=1
let counter=setInterval(() => {
    

    console.log(count);
    count++;
    if (count ==10){
        clearInterval(counter)
    }
    

},1000);



let colors=["red","blue","cyan","green","purple"]
let index=[0];
setInterval(() => {
 document.body.style.backgroundColor=colors[index];
 index++;
 if (index==colors.length){
    index=0;
 }   
} ,2000)
