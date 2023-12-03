const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.connectionString =process.env.CONNECTION_STRING
        this.raquetasPath = "/api/raquetas";
        this.gorrasPath = "/api/gorras";


        this.middelware();
        this.routes();
        this.db();
    }

    routes() {
        this.app.use(this.raquetasPath, require("../routes/raqueta"));
        this.app.use(this.raquetasPath, require("../routes/gorras"));
    }
    db() {
        mongoose.connect(this.connectionString).then(
            () =>{
                console.log("db connection established")
            }
        ).catch(
            (error)=>{
                console.log("db connection error")
                console.log(error)
            }

        )
    }

    middelware() {
        this.app.use(express.json());
        this.app.use(cors())
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;