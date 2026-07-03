//selecting the elements:


let heading=document.getElementById("title")
console.log(heading)


//manipulation change the text:
// heading.innerText="welcome to the chalapathi"

//2nd method
//queryselector():
//it is going to find the first matching element
//id,class,tag
let heading1=document.querySelector("#title")
console.log(heading1)


let bio=document.querySelector(".bio")
console.log(bio)
let head2=document.querySelector("h2")
console.log(head2)

let paragraphs=document.querySelectorAll("p")
console.log(paragraphs)


//reading the element:
console.log(
    document.getElementById("title").innerText

);



paragraphs.forEach((para) => {
    paragraphs.innerText="all";
    
});


//js can change css alse

function changstyle(){
let heading3=document.getElementById("title")
heading3.style.color="red"
heading3.style.backgroundColor="yellow";
heading3.style.fontSize="40px";
}

