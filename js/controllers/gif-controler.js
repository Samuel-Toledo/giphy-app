const SERVER_URL = "https://api.giphy.com/v1/gifs"
const API_KEY = "REdjCIsrDaXEUdZVYnaUrvd8UGkwgsci"

const getTrendingGifs = async () => {
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

getTrendingGifs()

