const employe = {
    name: "Francisco",
    lastName: "Tarrega",
    age: 50
}

const {age, name} =employe

console.log(age);
// OBTENER VALOR DE LOCAL STORAGE

 const value = localStorage.getItem();

 localStorage.setItem();





let _offset = 0;
let _keyWord = "";



document.querySelectorAll(".control-container .clear-icon").forEach((element) => {
    element.addEventListener("click", (e) => {
        //Obtener el valor de una propiedad
        const inputId = e.target.getAttribute("att-for");

        if (!inputId) return;

        const input = document.querySelector(`#${inputId}`)
        input.value = ""
        
        input.dispatchEvent(new Event("keyup"))
        input.focus();
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
    
    })
})

// document.querySelector("#key-word")

document.querySelector("#btn-load-more").addEventListener("click", async() => await processGifs());

document.querySelector("#search-gifs-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    console.log("Submit del formulario");
    
    await processGifs();
    
})

const processGifs = async() => {
    
    // OBTENEMOS EL VALOR DEL INPUT
    const tempKeyWord = document.querySelector("#key-word").value;
    
    // SI EL VALOR DEL INPUT ES VACIO NO HACEMOS NADA
    if (!tempKeyWord) {
        return
    }
    // EVALUAMOS QUE _KEYWORD SEA DIFERENTE DEL ACTUAL
    if (_keyWord !== tempKeyWord) {
        _offset = 0;
        _keyWord = tempKeyWord;
    }
    
    //BUSQUEDA DE LOS GIFS
    const gifs = await getGifsByKeywordAsync(_keyWord, _offset);
    
    _offset = _offset + gifs.length;
    
    addGifsInView(gifs)
}

const addGifsInView = (gifs) => {
    if (gifs.length == 0) {
        alert("La busqueda no obtuvo resultado")
        return
    }


    const gifsContainer = document.querySelector("#gifs-container");

    gifs.forEach((gif) => {
        const gifCard = document.createElement("div");
        gifCard.classList.add("gif-card")

        gifCard.innerHTML = `
        <img src="${gif.imageUrl}" alt="${gif.name}">
        <div class="details"></div>
        <p class="name">${gif.name}</p>
        
        `;
        // <i class="fa-solid fa-link"></i>
        // <i class="fa-solid fa-heart"></i>

        const btnLink = document.createElement("i");
        btnLink.classList.add("fa-solid", "fa-link");
        btnLink.addEventListener("click", () =>{
            navigator.clipboard.writeText(gif.imageUrl);
            alert("Gif copied")
        })


        const btnFavorite = document.createElement("i");
        btnFavorite.classList.add("fa-solid", "fa-heart");
        btnFavorite.addEventListener("click", () =>{

            alert("Gif added")
        })

        gifCard.querySelector(".details").append(btnLink, btnFavorite);  


        gifsContainer.prepend(gifCard);

    });

}
