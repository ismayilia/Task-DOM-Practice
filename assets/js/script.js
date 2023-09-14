"use script";

// function test(a,b,...datas){
//     datas.forEach(element => {
//         console.log(element);
//     });
// }

// test(1,2,3,4,5)

// let name = "Ismayil";
//  let result = [...name];
//  console.log(result);


// let ages1 = [1,5,6,7];
// let ages2 = [7,8,10];

// let result  = [...ages1, ...ages2];

// console.log(result);


// function test(a,b,c){
//     console.log(a+b+c);
// }

// let nums = [1,2,3];

// test(...nums);


// let elem = document.getElementsByTagName("h1");
// console.log(elem);

// let elem = document.getElementsByClassName("h1");
// console.log(elem);

// let elem = document.getElementById("head");
// console.log(elem);

// let elem = document.querySelector("#head");
// console.log(elem);


// let elem = document.querySelectorAll ("h1");
// console.log(elem);

// let span = document.querySelector(".header .header-item span")
// console.log(span);

// let elems = document.querySelectorAll(".header p")
// console.log(p);


// let span = document.querySelector(".header .header-item span")


// let elems = document.querySelectorAll(".header p")
// span.innerHTML = "Salamsasas";

// let elem = document.getElementById("text");

// console.log(elem);

// elems.forEach(element => {
//     console.log(element);
// });

// for (const item of elems) {
//     console.log(item);
// }

// for (let i = 0; i < elems.length; i++) {
//     console.log(elems[i].innerText);
    
// }


// for (let i = 0; i < elems.length; i++) {
//     if (elems[i].innerText=="salam") {
//         console.log("yes");
//     }
//     else{
//         console.log("no");
//     }
    
// }

// let span = document.querySelector(".header .header-item span")


// let elems = document.querySelectorAll(".header p")

// for (let i = 0; i < elems.length; i++) {
//         if (elems[i].innerText=="salam") {
//             elems[i].style.backgroundColor = "green"
//         }
//         else{
//             elems[i].style.backgroundColor = "red"
//         }
        
//     }


// let h1 = document.querySelector("h1");

// h1.style.color = "magenta";
// h1.style.marginTop = "100px";

// let elems = document.querySelectorAll("h1");

// for (const elem of h1) {
//     elem.style.color = "magenta";
//     elem.style.marginTop = "100px";
// }

// let elems = document.querySelectorAll("h1");
// elems[0].style.color = "magenta"


// let elem  = document.getElementById("head");

// elem.innerHTML = "<a>salamlar millet</a>"

// elem.innerText = "<a>salamlar millet</a>"
// elem.className = "mt-5"

// let elem  = document.getElementById("head");

// elem.className = "header-color mt-5"


// let elem  = document.getElementById("head");

// elem.classList.add("header-color");
// elem.classList.add("mx-5");
// elem.classList.remove("mt-5")
 

//elementin bu classi var ya yox

// let button  = document.querySelector("button");

// console.log(button.classList.contains("btn"))

// let button  = document.querySelector("button");

// if (button.classList.contains("btn-primary")) {
//     button.classList.remove("btn-primary");
//     button.classList.add("btn-success");
// }
// else{
//     button.classList.add("btn-warning");
// }

// let button  = document.querySelector("button");

// button.onclick = function(){
//     alert("hello word")
// }

// let button  = document.querySelector("button");

// button.onclick = function(){
//     alert("hello word")
// }

// let button  = document.querySelector("button");

// button.addEventListener("click",function(){
//     console.log("Hello word1");
// })

// button.addEventListener("click",function(){
//     console.log("Hello word2");
// })

// button.addEventListener("click",function(){
//     console.log("Hello word3");
// })

// let btnOn = document.querySelector(".buttons button:nth-child(1)");
// let btnOff = document.querySelector(".buttons button:nth-child(2)")
// let body = document.querySelector("body");

// btnOn.addEventListener("click",function(){
//     body.classList.add("body-on")
// })

// btnOff.addEventListener("click",function(){
//     body.classList.add("body-off")
// })


//button background deyishme



// let btnOn = document.querySelector(".buttons button:nth-child(1)");
// let btnOff = document.querySelector(".buttons button:nth-child(2)")
// let body = document.querySelector("body");

// btnOn.addEventListener("click",function(){
//     if (!body.classList.contains("body-on")) {
//         body.classList.add("body-on")
//         body.classList.remove("body-off")
//     }
// })

// btnOff.addEventListener("click",function(){
//     if (!body.classList.contains("body-off")) {
//         body.classList.add("body-off")
//         body.classList.remove("body-on")
//     }
// })




let body = document.querySelector("body");

let button = document.querySelector(".buttons button");

button.addEventListener("click", function(){

        //  body.classList.toggle("body-off")

        if (body.classList.contains("body-off")) {
            body.classList.remove("body-off");
            this.innerText = "On";
            button.style.removeProperty("background-color")
            }
        else{
            body.classList.add("body-off");
            this.innerText = "Off";
            button.style.backgroundColor ="magenta";
            
        }

})

