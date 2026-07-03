function greet(){
    console.log("hello"+name);
}
function process(callback)

//settimeout(function())
//async callbacks
settimeout(function(){
    alert("hello")
})
//multiple asynchronous tasks:
// login
//    |
// get users 
//    |
// get orders
//    |
// payments 
//    |
// logout


//to solve the above problem
//promises:

//stntax
let promis=
new promis(function(resolve,reject){

});

//create a promis:
let Promise=new Promise((resolve,Reflect)=>{
    resolve("sucess");
});


//reject()>calls when the op fails
let promise1=new
promise((resolve,reject)=>{
    reject("network error");
});
promise1.catch((error)=>{
    console.log(error)
});
//then is called sucessful execution 
//catch is used to handle the errors

function login(){
    return new 
    promise((resolve,reject)=>{
        let sucess=true;
        if(sucess){
            resolve("login sucessful")
        }
        else{
            reject("login failed")
        }
    });
}
login()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console,log(error)
});