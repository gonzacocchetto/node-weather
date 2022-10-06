const express = require('express');
const  swaggerUi = require ('swagger-ui-express'); 
const config = require('../../config');
const logger = require('../logger');



class ExpresServer {

    constructor() { //cuando inicia la aplicacion se instancia express para que se levante la app

        this.app = express();
        this.port = config.port;

        this._middlewares();
        
        this._swaggerConfig();

        this._routes();

        this._notFound();
        this._errorHandler();

        

    }

    _middlewares() {
        this.app.use(express.json()); //El .use es un middleware de expres
    }

    _routes() {

        this.app.head('/status', (req, res) => { // Ruta para saber si tu aplicacion sigue funcionando 
            res.status(200).end();
        });

        this.app.use(`${config.api.prefix}/users`, require('../../routes/users'));
    }

    _notFound() {

        this.app.use((req, res, next) => {

            const err = new Error('Not Found');
            err.code = 404;
            next();

        });
    }

    _errorHandler() { // Esta funcion nos sirve para saber si hay un error interno en nuestra app

        this.app.use((err, req, res, next) => {
            const code = err.code || 500;
            res.status(code);
            const body = {
                error: {
                    code,
                    message: err.message
                }
            }
            res.json(body);
        });
    }

    _swaggerConfig() {
        this.app.use(
            config.swagger.path,
            swaggerUi.serve,
            swaggerUi.setup(require('../logger/swagger/swagger.json')),
        );
    }





    async start() {
        this.app.listen(this.port, (error) => { //Hacemos una validacion para si el puerto esta ocupado no se levante el servidor

            if (error) {
                logger.error(err);
                process.exit(1);
                return;
            }

        })
    }
}

module.exports = ExpresServer;