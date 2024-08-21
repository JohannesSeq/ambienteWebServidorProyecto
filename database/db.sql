CREATE DATABASE IF NOT EXISTS playa_cacao_DB

CREATE TABLE IF NOT EXISTS usuario(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    correo VARCHAR(50),
    rol VARCHAR(25),
    user_pass VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS clientes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    direccion VARCHAR(200),
    telefono VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS productos(

    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    categoria VARCHAR(50),
    precio INT,
    cantidad INT

);

CREATE TABLE IF NOT EXISTS facturas(

    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    monto_total INT,
    id_cliente INT,
    FOREIGN KEY(id_cliente) REFERENCES clientes(id)

);

CREATE TABLE IF NOT EXISTS pedido(

    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    estado VARCHAR(50),
    id_cliente INT,
    FOREIGN KEY(id_cliente) REFERENCES clientes(id)

);

CREATE TABLE IF NOT EXISTS detalle_pedido(

    id INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    id_pedido INT,
    cantidad int,
    precio_total INT,
    FOREIGN KEY(id_pedido) REFERENCES pedido(id),
    FOREIGN KEY(id_producto) REFERENCES productos(id)

);

INSERT INTO usuario(nombre,correo,rol,user_pass) VALUES 

    ('Johannes','johannes@playacacao.com','Gerente','pass123'),
    ('Adrian','adrian@playacacao.com','vendedor','pass123'),
    ('steven','steven@playacacao.com','cliente','pass123');