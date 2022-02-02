const { Router } = require('express')
const { tareaGet,tareaPost, tareaUpdate } = require("../controllers/tareaController");

const route = Router()

route.get('/tareas', tareaGet);
route.post("/createTarea", tareaPost);
route.put("/updateTarea/:idtarea", tareaUpdate);

module.exports = route;