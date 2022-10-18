const express = require('express');
const Success = require('../handlers/successHandlers');
const {findCities} = require('../services/city.service');
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const cities = async (req, res, next) => {
    try{
        const cities = await findCities(req.params.city);
        const success = new Success(cities);
        res.json(success);
    } catch (err) {
        next(err);
    }
};


module.exports = {
    cities
}