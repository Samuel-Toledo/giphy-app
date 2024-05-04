const employe = {
    name: "Francisco",
    lastName: "Tarrega",
    age: 50
}

const {age, name} =employe

console.log(age);




document.querySelectorAll(".control-container .clear-icon").forEach((element) => {
    element.addEventListener("click", (e) => {
        //Obtener el valor de una propiedad
        const inputId = e.target.getAttribute("att-for");

        if (!inputId) return;

        const input = document.querySelector(`#${inputId}`)
        input.value = ""
        
        input.dispatchEvent(new Event("keyup"))
    })
})


document.querySelectorAll(".control-container .input-search").forEach((element) => {
    
    element.addEventListener("keyup", (e) => {
    
        const {value} = e.target;
    
        if (!value) {
            document.querySelector("#btn-load-more").disabled = true
            return
        }
        document.querySelector("#btn-load-more").disabled = false
    
        console.log(value);
    })
})

document.querySelector("#key-word")
