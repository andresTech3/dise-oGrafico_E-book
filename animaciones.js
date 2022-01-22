const btn = document.querySelector(".btn");
const textChange = document.querySelector(".text-change")


const eventPerformance = (event, color1, color2) =>{
    btn.addEventListener(event, ()=>{
        btn.classList.replace(color1, color2);
        btn.style.transition = "2s";
    })
}

eventPerformance("mouseover","bg-dark", "bg-danger");
eventPerformance("mouseout","bg-danger", "bg-dark");

btn.addEventListener("click", ()=>{
    textChange.innerHTML= "El E-book se estara enviando al grupo de Telegram en breve";
})

