
/**
 * 
 * @param {Express.Request} req //Estos comentarios siven para que nos aparezcan las funcionalidades de express cuando decimos res. o req. 
 * @param {Express.Response} res 
 */

const { response } = require("express");

const getAllUsers = (req, res) => {

    const users = [
        {
            id: 1,
            name: 'Marta'
        },
        {
            id: 2,
            name: 'Fernando'
        },
    ]

   // throw new Error('Ocurrio un error al obtener los usuarios en la base de datos'); //Simulamos el error para probarlo en postman

    res.json(users);

};
 
/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 */
const createUser = (req, res) => {

    const user = req.body;
    user.id = 8565 //Aca lo defino para que en postman se pueda mostrar

    const result = {
        message: 'User Created',
        user //aca lo persistimos como si tuvieramos una base de datos
    }
    res.status(201).json(result);
};

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 */
const updateUser = (req, res) => {

    const id = req.params;
    const user = req.body
    user.id = id;

    const result = {
        message: 'User Updated',
        user
    }
    res.status(200).json(result); //El status 200 no se coloca porque es por defecto 

};

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 */
const updatePartialUser = (req, res) => {

    const result = {
        message: 'User Updated with patch'

    }
    res.status(200).json(result);

};

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 */
const deleteUser = (req, res) => {

    //const {id} = req.params;
    const id = req.params.id;

    const result = {
        message: `User id ${id} Deleted`
    }
    res.status(200).json(result);

};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}