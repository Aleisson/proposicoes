const Database = require("../db/config");

module.exports = {

    async get() {
        
        const db = await Database();
    
        const temas = await db.all(`SELECT * FROM TEMAS`);
    
        await db.close();
    
        return temas.map((tema) => ({
          id: tema.cod,
          nome: tema.nome
        }));
    
    }

}