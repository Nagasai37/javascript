// ----------------------
// DOM Selection
// ----------------------

const welcome = document.getElementById("welcome");

const destination = document.querySelector("#destination");

const packages = document.querySelectorAll(".package");

// ----------------------
// Modify Elements
// ----------------------

// Change Welcome Message

document.getElementById("changeWelcome").onclick=function(){

welcome.innerHTML="Enjoy Your Dream Vacation!";

};

// Update Package Price

document.getElementById("updatePrice").onclick=function(){

document.getElementById("price1").innerHTML="12000";

};

// Add New Destination

document.getElementById("addDestination").onclick=function(){

let li=document.createElement("li");

li.innerHTML="Kashmir";

document.getElementById("destinationList").appendChild(li);

};

// Display Selected Destination

destination.addEventListener("change",function(){

document.getElementById("destinationInfo").innerHTML=
"You selected "+this.value;

});

// ----------------------
// CSS Manipulation
// ----------------------

// Highlight Package

packages.forEach(function(item){

item.addEventListener("click",function(){

packages.forEach(function(p){

p.classList.remove("active");

});

this.classList.add("active");

});

});

// Background Change

destination.addEventListener("change",function(){

if(this.value=="Goa")

document.body.style.background="lightyellow";

else if(this.value=="Manali")

document.body.style.background="lightblue";

else if(this.value=="Kerala")

document.body.style.background="lightgreen";

else

document.body.style.background="white";

});

// Dynamic Button Style

document.querySelectorAll("button").forEach(function(btn){

btn.style.background="orange";

btn.style.color="white";

});

// ----------------------
// Events
// ----------------------

// Click

document.getElementById("showDetails").onclick=function(){

let details=document.getElementById("details");

if(details.style.display=="none")

details.style.display="block";

else

details.style.display="none";

};

// Keyup

document.getElementById("request").addEventListener("keyup",function(){

document.getElementById("count").innerHTML=this.value.length;

});

// Submit

document.getElementById("bookingForm").addEventListener("submit",function(e){

let name=document.getElementById("name").value;

let request=document.getElementById("request").value;

if(name=="" || request==""){

alert("Please fill all fields.");

e.preventDefault();

}

else{

alert("Booking Confirmed!");

}

});

// ----------------------
// Theme Switcher
// ----------------------

document.getElementById("themeBtn").onclick=function(){

document.body.classList.toggle("dark");

};

// ----------------------
// Travel Office Power Switch
// ----------------------

let power=false;

document.getElementById("powerBtn").onclick=function(){

let bulb=document.getElementById("bulb");

if(power==false){

bulb.src="https://www.w3schools.com/js/pic_bulbon.gif";

power=true;

}

else{

bulb.src="https://www.w3schools.com/js/pic_bulboff.gif";

power=false;

}

};