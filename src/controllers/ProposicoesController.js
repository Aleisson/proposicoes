const deputadoModel = require('../model/Deputados');
const temasModel = require('../model/Temas');
const partidosModel = require('../model/Partidos');


module.exports = {

  async show(req, res) {
    const deputados = await deputadoModel.get();
    const temas = await temasModel.get();
    const partidos = await partidosModel.get();
    return res.render("proposicoes", { deputados, temas, partidos})
  }


}