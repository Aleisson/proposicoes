const Database = require("../db/config");

module.exports = {

    async get() {
        
        const db = await Database();
    
        const deputados = await (await db.all(`SELECT * FROM DEPUTADOS ORDER BY idLegislatura`))
    
        await db.close();
    
        return deputados.map((deputado) => ({
          id: deputado.id,
          sexo:deputado.sexo,
          nome: deputado.nome,
          siglaPartido: deputado.siglaPartido,
          idLegislatura: deputado.idLegislatura,
          email: deputado.email
        }));
    
    }

}