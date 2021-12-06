CREATE TABLE TEMAS( cod INT NOT NULL, nome VARCHAR(60) NOT NULL, PRIMARY KEY(cod) );

CREATE TABLE DEPUTADOS( id INT NOT NULL,
                        sexo CHAR NOT NULL,
                        nome VARCHAR(120) NOT NULl, 
                        siglaPartido VARCHAR(20) NOT NULL, 
                        idLegislatura INT  NOT NULL, 
                        email VARCHAR(255),  
                        PRIMARY KEY(id, idLegislatura) );

CREATE TABLE PARTIDOS( id INT NOT NULL, sigla VARCHAR(30) NOT NULL, nome VARCHAR(120), PRIMARY KEY(id) );