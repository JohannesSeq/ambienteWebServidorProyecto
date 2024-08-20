--Creacion de la base de datos.
CREATE DATABASE IF NOT EXISTS playa_cacao_DB

CREATE TABLE IF NOT EXISTS usuario(

    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    correo VARCHAR(50),
    rol VARCHAR(25),
    user_pass VARCHAR(50)
    
);


CREATE TABLE IF NOT EXISTS productos(

    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(100),
    precio INT,
    stock INT

);

CREATE TABLE IF NOT EXISTS facturas(

    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    monto_total INT,
    id_usuario INT,
    FOREIGN KEY(id_usuario) REFERENCES usuario(id)

);

CREATE TABLE IF NOT EXISTS pedido(

    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    estado VARCHAR(50),
    id_usuario INT,
    FOREIGN KEY(id_usuario) REFERENCES usuario(id)

);

CREATE TABLE IF NOT EXISTS detalle_pedido(

    id INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    id_pedido INT,
    cantidad int,
    precio_total INT,
    FOREIGN KEY(id_pedido) REFERENCES usuario(id),
    FOREIGN KEY(id_producto) REFERENCES usuario(id)

);

INSERT INTO usuario(nombre,correo,rol,user_pass) VALUES 

    ('Johannes','johannes@playacacao.com','Gerente','pass123'),
    ('Adrian','adrian@playacacao.com','vendedor','pass123'),
    ('steven','steven@playacacao.com','cliente','pass123');