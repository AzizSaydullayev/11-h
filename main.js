let ism =prompt ("Ismingizni kiriting:");
let familiya =prompt ("Familiyangizni kiriting:");
let yosh =+prompt ("Yoshingizni kiriting:")

let question =+prompt ("1)Kotta 2)Kichik")

if(question===1){
ism.toLocaleUpperCase()
familiya.toLocaleUpperCase()
}else if(question===2){
ism.toLocaleLowerCase()
familiya.toLocaleLowerCase()
}else{
alert("1 yoki 2 kiriting")
question=+prompt("1)Kotta 2)Kichik")
}


document.querySelector(".firstText").textContent+=ism
document.querySelector(".secondText").textContent+=familiya
document.querySelector(".thirdText").textContent+=yosh