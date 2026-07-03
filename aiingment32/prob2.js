// --------------------
// DOM Selection
// --------------------

const welcome = document.getElementById("welcome");

const doctor = document.querySelector("#doctor");

const doctorItems = document.querySelectorAll(".doctor");


document.getElementById("changeWelcome").onclick=function(){

welcome.innerHTML="Welcome to City Hospital - We Care For You";

};

// Display Selected Doctor

doctor.addEventListener("change",function(){

document.getElementById("selectedDoctor").innerHTML=
"Selected Doctor: " + this.value;

});

// Add New Doctor

document.getElementById("addDoctor").onclick=function(){

let li=document.createElement("li");

li.innerHTML="Dr. David";

li.className="doctor";

document.getElementById("doctorList").appendChild(li);

};

// Change Emergency Contact

document.getElementById("changeEmergency").onclick=function(){

document.getElementById("emergency").innerHTML=
"Emergency Number: 102";

};


doctorItems.forEach(function(item){

item.addEventListener("click",function(){

doctorItems.forEach(function(d){

d.classList.remove("active");

});

this.classList.add("active");

});

});

// Change Background Color

document.body.style.background="#f5f5f5";



document.getElementById("showSlots").onclick=function(){

let slot=document.getElementById("slots");

if(slot.style.display=="none")

slot.style.display="block";

else

slot.style.display="none";

};

// Change Event

doctor.addEventListener("change",function(){

let text="";

if(this.value=="Dr. Smith")

text="Specialization: Cardiologist";

else if(this.value=="Dr. John")

text="Specialization: Neurologist";

else if(this.value=="Dr. Lisa")

text="Specialization: Pediatrician";

document.getElementById("specialization").innerHTML=text;

});

// Keyup Event

document.getElementById("symptoms").addEventListener("keyup",function(){

document.getElementById("count").innerHTML=this.value.length;

});

// Submit Event

document.getElementById("appointmentForm").addEventListener("submit",function(e){

let name=document.getElementById("patientName").value;

let symptom=document.getElementById("symptoms").value;

if(name=="" || symptom==""){

alert("Please fill all fields.");

e.preventDefault();

}

else{

alert("Appointment Booked Successfully!");

this.classList.add("success");

}

});



document.getElementById("themeBtn").onclick=function(){

document.body.classList.toggle("dark");

};



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