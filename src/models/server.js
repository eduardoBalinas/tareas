const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const sequelize = require("../helpers/database");
const tareaRouter = require("../routes/tareasRoute");
const Tarea = require("./tareas");

class Server {

    constructor() {
        this.app = express()
        this.db = sequelize;
        this.middelwears()
        this.route();
    }

    middelwears() {
        this.app.use(cors({ origin: true }))
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
    }

    async connectionDB() {
        try{
            await this.db.authenticate()
            Tarea.sync()
            console.log("DB Ok");
        }catch(e){
            console.log(e);
        }

    }

    route() {
        this.app.use(tareaRouter)
    }

    listen() {
        this.app.listen(3200, () => {
            console.log("We are in line");
        })
    }

}

module.exports = Server