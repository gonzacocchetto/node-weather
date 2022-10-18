const cityRepository = require('../repositories/city.repository');
const repository = new cityRepository();
const logger = require('../loaders/logger')


const findCities = async(city) => {

    const cities = await repository.findCities(city);

    logger.silly(JSON.stringify(cities));

    return cities.features.map( e => { //Hacemos un mapeo de los elementos de la ciudades
        return {
            id: e.id,
            name: e.places_name,
            log: e.geometry.coordinates[0],
            lat: e.geometry.coordinates[1],
        }
    })
}

module.exports = {
    findCities
}