const dotenv = require('dotenv');

const envFound = dotenv.config(); /* Se lo crea para pregntar si esta el archivo .env, porque como no se versiona, es decir no se agrega a GitHub 
                                   y cuando alguien quiera clonar el proyecto y correrlo no le va a funcionar porque no se encuentra el .env con las propiedades  
                                   */
if (!envFound) {
    throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development' // Sirve para asignarle por default el valor development por si no se encuentra 

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: '/api/v1'  //Se suele definir un prefijo ademas del localhost:3000, todos nuestros servicios van a empezar desde /api/v1
    },
    log:{
        level: process.env.LOG_LEVEL
    },
    swagger:{
        path: '/api-docs'
    },
    mapbox:{
        pathBase:'https://api.mapbox.com/geocoding/v5/mapbox.places/',
        apikey: process.env.MAPBOX_API_KEY
    },
    openweathermap:{
        pathBase: 'https://api.openweathermap.org/data/2.5/weather',
        apikey: process.env.OPENWEATHERMAP_API_KEY
    }
}
