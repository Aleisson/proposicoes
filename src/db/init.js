const Database = require('./config')

const initDb = {
    async init() {

        const db = await Database()


        await db.exec(`CREATE TABLE TEMAS( cod INT NOT NULL, nome VARCHAR(60) NOT NULL, PRIMARY KEY(cod) );`);


        await db.run(`INSERT INTO TEMAS (cod, nome) VALUES 
(34,'Administração Pública'),
(35,'Arte, Cultura e Religião'),
(37,'Comunicações'),
(39,'Esporte e Lazer'),
(40,'Economia'),
(41,'Cidades e Desenvolvimento Urbano'),
(42,'Direito Civil e Processual Civil'),
(43,'Direito Penal e Processual Penal'),
(44,'Direitos Humanos e Minorias'),
(46,'Educação'),
(48,'Meio Ambiente e Desenvolvimento Sustentável'),
(51,'Estrutura Fundiária'),
(52,'Previdência e Assistência Social'),
(53,'Processo Legislativo e Atuação Parlamentar'),
(54,'Energia, Recursos Hídricos e Minerais'),
(55,'Relações Internacionais e Comércio Exterior'),
(56,'Saúde'),
(57,'Defesa e Segurança'),
(58,'Trabalho e Emprego'),
(60,'Turismo'),
(61,'Viação, Transporte e Mobilidade'),
(62,'Ciência, Tecnologia e Inovação'),
(64,'Agricultura, Pecuária, Pesca e Extrativismo'),
(66,'Indústria, Comércio e Serviços'),
(67,'Direito e Defesa do Consumidor'),
(68,'Direito Constitucional'),
(70,'Finanças Públicas e Orçamento'),
(72,'Homenagens e Datas Comemorativas'),
(74,'Política, Partidos e Eleições'),
(76,'Direito e Justiça'),
(85,'Ciências Exatas e da Terra'),
(86,'Ciências Sociais e Humanas');`)


        await db.exec(`CREATE TABLE DEPUTADOS( id INT NOT NULL,
            sexo CHAR NOT NULL,
            nome VARCHAR(120) NOT NULl, 
            siglaPartido VARCHAR(20) NOT NULL, 
            idLegislatura INT  NOT NULL, 
            email VARCHAR(255),  
            PRIMARY KEY(id, idLegislatura) );
`);


        await db.run(`INSERT INTO  DEPUTADOS (id, sexo, nome, siglaPartido, idLegislatura, email) VALUES
        (178875, 'M' ,'ALEXANDRE BALDY','PP', 55, ''),
        (178876, 'M' ,'CÉLIO SILVEIRA','PSDB', 55, 'dep.celiosilveira@camara.leg.br'),
        (144523, 'M' ,'DANIEL VILELA','MDB', 55, ''),
        (164359, 'M' ,'DELEGADO WALDIR','PSL', 55, 'dep.delegadowaldir@camara.leg.br'),
        (178877, 'M' ,'FÁBIO SOUSA','PSDB', 55, ''),
        (178878, 'M' ,'GIUSEPPE VECCI','PSDB', 55, ''),
        (160596, 'M' ,'HEULER CRUVINEL','PP', 55, ''),
        (74366, 'M' ,'JOÃO CAMPOS','PRB', 55, 'dep.joaocampos@camara.leg.br'),
        (73666, 'M' ,'JOVAIR ARANTES','PTB', 55, ''),
        (178879, 'M' ,'LUCAS VERGILIO','SOLIDARIEDADE', 55, 'dep.lucasvergilio@camara.leg.br'),
        (178880, 'M' ,'MARCOS ABRÃO','PPS', 55, ''),
        (74812, 'M' ,'PEDRO CHAVES','MDB', 55, ''),
        (73674, 'M' ,'ROBERTO BALESTRA','PP', 55, ''),
        (74371, 'M' ,'RUBENS OTONI','PT', 55, 'dep.rubensotoni@camara.leg.br'),
        (74372, 'M' ,'SANDES JÚNIOR','PP', 55, ''),
        (160617, 'M' ,'THIAGO PEIXOTO','PSD', 55, ''),
        (121948, 'M' ,'Adriano do Baldy','PP', 56, 'dep.adrianodobaldy@camara.leg.br'),
        (204413, 'M' ,'Alcides Rodrigues','PATRIOTA', 56, 'dep.alcidesrodrigues@camara.leg.br'),
        (178876, 'M' ,'Célio Silveira','PSDB', 56, 'dep.celiosilveira@camara.leg.br'),
        (164359, 'M' ,'Delegado Waldir','PSL', 56, 'dep.delegadowaldir@camara.leg.br'),
        (204412, 'M' ,'Dr. Zacharias Calil','DEM', 56, 'dep.dr.zachariascalil@camara.leg.br'),
        (204389, 'M' ,'Elias Vaz','PSB', 56, 'dep.eliasvaz@camara.leg.br'),
        (204392, 'M' ,'Francisco Jr.','PSD', 56, 'dep.franciscojr@camara.leg.br'),
        (204419, 'M' ,'Glaustin da Fokus','PSC', 56, 'dep.glaustindafokus@camara.leg.br'),
        (74366, 'M' ,'João Campos','REPUBLICANOS', 56, 'dep.joaocampos@camara.leg.br'),
        (204386, 'M' ,'Jose Mario Schreiner','DEM', 56, 'dep.josemarioschreiner@camara.leg.br'),
        (204391, 'M' ,'José Nelto','PODE', 56, 'dep.josenelto@camara.leg.br'),
        (178879, 'M' ,'Lucas Vergilio','SOLIDARIEDADE', 56, 'dep.lucasvergilio@camara.leg.br'),
        (204390, 'M' ,'Professor Alcides','PP', 56, 'dep.professoralcides@camara.leg.br'),
        (73674, 'M' ,'ROBERTO BALESTRA','PP', 56, ''),
        (74371, 'M' ,'Rubens Otoni','PT', 56, 'dep.rubensotoni@camara.leg.br'),
        (179587, 'M' ,'Vitor Hugo','PSL', 56, 'dep.vitorhugo@camara.leg.br'),
        (160598, 'F' ,'FLÁVIA MORAIS','PDT', 55, 'dep.flaviamorais@camara.leg.br'),
        (166402, 'F' ,'MAGDA MOFATTO','PR', 55, 'dep.magdamofatto@camara.leg.br'),
        (160598, 'F' ,'Flávia Morais','PDT', 56, 'dep.flaviamorais@camara.leg.br'),
        (166402, 'F' ,'Magda Mofatto','PL', 56, 'dep.magdamofatto@camara.leg.br');
        
`);


        await db.exec(`CREATE TABLE PARTIDOS( id INT NOT NULL, sigla VARCHAR(30) NOT NULL, nome VARCHAR(120), PRIMARY KEY(id) );`);

        await db.run(`  INSERT INTO PARTIDOS (id, sigla, nome) VALUES
(36898,'AVANTE','Avante'),
 (37905,'CIDADANIA','Cidadania'),
 (37902,'DC','Democracia Cristã'),
 (36769,'DEM','Democratas'),
 (36899,'MDB','Movimento Democrático Brasileiro'),
 (37901,'NOVO','Partido Novo'),
 (37900,'PATRI','Patriota'),
 (37907,'PATRIOTA','Patriota'),
 (36863,'PCB','Partido Constitucionalista Brasileiro'),
 (36779,'PCdoB','Partido Comunista do Brasil'),
 (36781,'PCO','Partido da Causa Operária'),
 (36786,'PDT','Partido Democrático Trabalhista'),
 (36793,'PHS','Partido Humanista da Solidariedade'),
 (37906,'PL','Partido Liberal'),
 (36887,'PMB','Partido da Mulher Brasileira'),
 (36801,'PMN','Partido da Mobilização Nacional'),
 (36896,'PODE','Podemos'),
 (37903,'PP','Progressistas'),
 (36762,'PPL','Partido Pátria Livre'),
 (36813,'PPS','Partido Popular Socialista'),
 (36814,'PR','Partido da República'),
 (36815,'PRB','Partido Republicano Brasileiro'),
 (36763,'PROS','Partido Republicano da Ordem Social'),
 (36824,'PRP','Partido Republicano Progressista'),
 (36829,'PRTB','Partido Renovador Trabalhista Brasileiro'),
 (36832,'PSB','Partido Socialista Brasileiro'),
 (36833,'PSC','Partido Social Cristão'),
 (36834,'PSD','Partido Social Democrático'),
 (36835,'PSDB','Partido da Social Democracia Brasileira'),
 (36837,'PSL','Partido Social Liberal'),
 (36839,'PSOL','Partido Socialismo e Liberdade'),
 (36843,'PSTU','Partido Socialista dos Trabalhadores Unificado'),
 (36844,'PT','Partido dos Trabalhadores'),
 (36845,'PTB','Partido Trabalhista Brasileiro'),
 (36846,'PTC','Partido Trabalhista Cristão'),
 (36851,'PV','Partido Verde'),
 (36886,'REDE','Rede Sustentabilidade'),
 (37908,'REPUBLICANOS','Republicanos'),
 (36852,'S.PART.','Sem Partido'),
 (37904,'SOLIDARIEDADE','Solidariedade');`);

        await db.close()
    }
}


initDb.init()