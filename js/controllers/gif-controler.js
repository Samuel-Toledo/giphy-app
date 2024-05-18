const SERVER_URL = "https://api.giphy.com/v1/gifs"
const API_KEY = "REdjCIsrDaXEUdZVYnaUrvd8UGkwgsci"

const getTrendingGifsAsync = async () => {
    //GENERA LA URL DEL SERVICIO
    const endpoint = `${SERVER_URL}/trending?`; 

    // generamos nuestro objeto de query params
    
    const queryParams = new URLSearchParams({
        api_key: API_KEY,
        limit: 8,
        offset: 0,
        rating: "g"
    });

    //GENERAMOS URL DEL SERVICIO
    const url = endpoint + queryParams
    
    // EJECUTAR SERVICIO COMO FETCH PROMESA CINCRONA

    // PROMESA CINCRONA
    // fetch(endpoint, {
    //     method: "GET",
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then(({ data, meta, pagination }) => {
    //       console.log(data);
    //       console.log(meta);
    //       console.log(pagination);
    //     });

    // FETCH COMO PROMESA ASINCRONA
    const response = await fetch(url, {method: "GET"});

    // SE OBTIENE EL RESULTADO JSON DEL RESPONSE(DESESTRUTURADO)  
    const {data, meta, pagination} =await response.json();
    
    
    console.log(data);
    console.log(meta);
    console.log(pagination);
}

// getTrendingGifsAsync()



const getGifsByKeywordAsync = async (query, offset = 0) => {
    try {
    const endpoint = `${SERVER_URL}/search?`;

    const queryParams = new URLSearchParams ({
        api_key: API_KEY,
        q: query, //To Do Cambiar por variable
        limit: 8,
        offset: offset //To Do Cambiar por variable
    });

    const url = endpoint + queryParams;

    const httpResponse = await fetch(url, {method: "GET"}) // De forma predefinida es un GET


    // VALIDAMOS SI LA RESPUESTA FUE EXITOSA

    if (httpResponse.ok === false) {
        throw new Error("Ocurrió un error al tratar de consultar los gifs");
    }

    // OBTENEMOS LA RESPUESTA DEL SERVICIO

    const gifsResponse = await httpResponse.json();

console.log(`que es ${gifsResponse}`);

    const {data} = gifsResponse;

    // LIMPIAMOS EL ARREGLO OBTENIDO DEL SERVICIO WEB

    const gifs = data.map((item) => {
        const gif = new Gif(item.id, item.title, item.images.downsized.url);
        
        return gif //EQUIVALE A UN ARRGELO.PUSH() YA QUE MAP RETONRA UN NUEVO AREGLO A PARTIR DEL ORIGINAL QUE RECORRE
    });

    return gifs



    } catch (error) {
        console.warn(error);
    }

}

// const addGifsInView = (gifs) => {
//     if (gifs.length == 0) {
//         alert("La busqueda no obtuvo resultado")
//         return
//     }
//     const gifsContainer = document.querySelector("#gifs-container");

//     gifs.forEach((gif) => {
//         const gifCard = document.createElement("div");
//         gifCard.classList.add(".gif-card")

//         gifCard.innerHTML = `
//         <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJwY2x3dWw0c2dtbjFoZzRmd2EwdDBpOTd1OHZhbTJ3aDI5enI3ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KegCCrQkkkJzO/giphy.gif" alt="">
//         <div class="details">
//             <i class="fa-solid fa-link"></i>
//             <i class="fa-solid fa-heart"></i>
//         </div>
//         <p class="name">wolvwrine</p>

//         `
//         gifsContainer.append(gifCard);
//     });

// }


