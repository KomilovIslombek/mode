// var user1 =  {
//     nome : "user1",
//     surn : "userovich",
//     age : 19
// }

// function function1(a) {
//     return "Your Name is " + a
// }
// document.getElementById("hh2").innerHTML = function1(user1["nome"])

// function function2(uAge) {
//     if(uAge > 40 ) {
//         return "Your age is tall"
//     } else if (uAge <= 40) {
//         return "Succes"
//     }
// }
// document.getElementById("h1").innerHTML = function2(user1["age"])

// var arr = ["Ahmadilo", "Nosirovich", 22]

// function Funcarr(a, b, c) {
//     document.getElementById("card").innerHTML = Funcarr(a + b + c)
// }
// Funcarr()

let add = document.getElementById("click")
let rem = document.getElementById("remove")

let number = document.getElementById("num")
let val = document.querySelector("#val").innerHTML
let son = 0

if(son === 0){
    rem.disabled = true
} 
add.addEventListener("click", function() {
    son += 1
    number.innerHTML = son 
    calc(son)
})
rem.addEventListener("click", function() {
    son -= 1
    number.innerHTML = son
    calc(son)
})
function calc(a) {
    if( a >= val){
        add.disabled = true
    } else {
        add.disabled = false
    }
    if (a <= 0) {
        rem.disabled = true
    } else {
        rem.disabled = false
    }
} 