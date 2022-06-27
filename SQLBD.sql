USE practica-adicional-semana17
CREATE TABLE IF NOT EXISTS categorias (
  id SERIAL PRIMARY KEY NOT NULL,
  descripcion varchar(45) NOT NULL,
  codigo varchar(10) NOT NULL,
  habilitada int NOT NULL
);

CREATE TABLE IF NOT EXISTS marcas (
  id SERIAL PRIMARY KEY NOT NULL,
  descripcion varchar(45) NOT NULL,
  codigo varchar(10) NOT NULL,
  habilitada int NOT NULL
) ;