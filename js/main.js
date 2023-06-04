const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", ()=> {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {
    nav.classList.remove("visible");
})



const $btnUp = document.getElementById("up");

window.addEventListener("scroll", (e)=>{
    let y = document.documentElement.scrollTop;
    if(y === 0){
        $btnUp.classList.add("hide");
        $btnUp.classList.remove("active");
    } else if(y >= 1000){
        $btnUp.classList.add("acive");
        $btnUp.classList.remove("hide");
    }
})

document.addEventListener("DOMContentLoaded", (e)=>{
    $btnUp.classList.add("hide");
})

document.addEventListener("click", (e)=>{
    if(e.target === $btnUp || e.target.matches(".fa-arrow-up")){
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
})