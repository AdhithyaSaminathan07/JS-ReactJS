let button1 = document.getElementById("listner")
let button2 =document.getElementById("handler")

// button1.addEventListener("click",function () {
//     console.log("First Listner");
//     // alert("First Listner");
// })


// button1.addEventListener("click",function () {
//     console.log("Second Listner");
// })

// button1.addEventListener("click",function () {
//     console.log("Third Listner");
// })


// //Event handlera
// button2.onclick =function(){
//      console.log("FirstHandler");
// }


// button2.onclick =function(){
//      console.log("Second Handler");
// }


let image = document.querySelector("img")
let para = document.querySelector("p")


image.addEventListener("mouseover",function(){
    image.src ="image2.jpg"
    para.innerText ="Nature Bridge"
})

image.addEventListener("mouseout",function(){
    image.src ="image3.jpg"
    para.innerText= "Snow Camara"
})

