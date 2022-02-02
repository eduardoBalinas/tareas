const { request, response } = require('express');
const Tarea = require("../models/tareas");

const tareaGet = async ( req = request , res = response ) => {

    const tarea = await Tarea.findAll({
        where: {
            status: 1
        },
        raw: true
    }).then((data) => {
          return res.status(200).json({
              msg: "Ok",
              data
          })
      }).catch(e => {
          return res.status(404).json({
              msg: "False",
              info: "Fallo la peticion"
          })
      })

}

const tareaPost = async ( req = request, res = response ) => {

    const { titulo,descripcion,materia,fechaEntrega } = req.body

    await Tarea.create(
        {titulo,descripcion,materia,fechaEntrega}
        ).then((data) => {
            return res.status(200).json({
                msg: "Ok",
                data
            })
        })

}

const tareaUpdate = async ( req = request, res = response ) => {

    const { titulo,descripcion,materia,fechaEntrega } = req.body

    const tarea = await Tarea.findOne({where: {idtarea: req.params.idtarea}})
                                .then(data => {
                                    console.log(data.status);
                                    data.status = 0
                                    data.save()
                                        .then(data => {
                                            return res.status(200).json({
                                                msg: "Ok",
                                                data
                                            })  
                                        })
                                })

}

module.exports = { tareaGet, tareaPost,tareaUpdate }