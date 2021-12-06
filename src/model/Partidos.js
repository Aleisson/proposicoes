const Database = require("../db/config");

module.exports = {

  async get() {

    const db = await Database();

    const partidos = await db.all(`SELECT DISTINCT P.id, P.sigla, P.nome FROM PARTIDOS AS P JOIN DEPUTADOS AS D
        ON P.sigla = D.siglaPartido
        `);

    await db.close();

    return partidos.map((partido) => ({
      id: partido.id,
      sigla: partido.sigla,
      nome: partido.nome
    }));

  }

}