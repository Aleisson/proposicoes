const deputadoModel = require('../model/Deputados');


module.exports = {

    async show(req, res) {
        const deputados = await deputadoModel.get();
  
        return res.render("deputados", {deputados})
      }


}