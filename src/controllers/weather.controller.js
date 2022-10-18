const express = require('express');
const Success = require('../handlers/successHandlers');
const { findCities } = require('../services/city.service');
const {
    weatherByCoordinates: weatherByCoordinatesService,
    weatherByCityId: weatherByCityIdService } = require('../services/weather.service');

/**
 * 
 * @param {express.Request} req //Estos comentarios siven para que nos aparezcan las funcionalidades de express cuando decimos res. o req. 
 * @param {express.Response} res 
 */
const weatherByCoordinates = async (req, res) => {
    try {
        const { lon, lat } = req.query;
        const weather = await weatherByCoordinatesService(lon, lat);
        const success = new Success(weather);

        res.json(success);
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const weatherByCityId = async (req, res) => {
    try {
        const id = req.params.id;  //.params se utiliza cuando viene de la url
        const city = req.params.city;
        const weather = await weatherByCityIdService(city, id);
        const success = new Success(weather);
        res.json(success);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    weatherByCoordinates,
    weatherByCityId
}