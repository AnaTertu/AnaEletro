DROP DATABASE IF EXISTS fseletro;
CREATE DATABASE IF NOT EXISTS fseletro;

USE fseletro;

 SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
    START TRANSACTION;
    SET time_zone = "+00:00";

CREATE TABLE fseletro.products(
	idproducts INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(45) NOT NULL,
    descriptionProducts VARCHAR(150) NOT NULL,
    prices DECIMAL(8,2) NOT NULL,
    pricesEnd DECIMAL(8,2) NOT NULL,
    imageProducts VARCHAR(255) NOT NULL
    ) comment = 'Produtos anúnciados na loja fseletro.';

CREATE TABLE fseletro.peoples(
    idpeople INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    names VARCHAR(80) NOT NULL,
    email VARCHAR(80) NOT NULL,
    phones INT(12) NOT NULL,
    posts VARCHAR(200),
    passwords INT(8) NOT NULL
) comment = 'Clientes da loja fseletro.';

CREATE TABLE fseletro.requests (
    idrequests INT NOT NULL  PRIMARY KEY AUTO_INCREMENT,
    namesC VARCHAR(45) NOT NULL,
    addressC VARCHAR(150),
    phonesC INT NOT NULL,
    SELECT * FROM fseletro.products descriptionProducts VARCHAR(150),
    SELECT * FROM fseletro.products pricesEnd DECIMAL(8,2),
    amount INT,
    totalValue DECIMAL(8,2)
    ) comment = 'Produtos anunciados na loja fseletro';
    
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
    VIEW `fseletro`.`pro` AS
    SELECT 
        `fseletro`.`products`.`idproducts` AS `idproducts`,
        `fseletro`.`products`.`category` AS `category`,
        `fseletro`.`products`.`descriptionProducts` AS `descriptionProducts`,
        `fseletro`.`products`.`prices` AS `prices`,
        `fseletro`.`products`.`pricesEnd` AS `pricesEnd`,
        `fseletro`.`products`.`imageProducts` AS `imageProducts`
    FROM
        `fseletro`.`products`

    INSERT INTO fseletro.products (category, descriptionProducts, prices, pricesEnd, imageProducts) 
    VALUES 
    ('geladeira','geladeira frost free brastemp side inverse 540 litros', 6389.00, 5019.00, 'imag/geladeira_brastemp.jpg');

INSERT INTO fseletro.peoples (names, email, phones, posts, passwords) VALUES('Ana Tertuliano', 'ana@gmail', '551198459845', "Olá, mundo!", 12345678);
INSERT INTO fseletro.peoples (names, email, phones, posts, passwords) VALUES('Elnatan', 'elnatan@gmail.com','551195293527', 'Ótimos produtos.', 123);
INSERT INTO fseletro.peoples (names, email, phones, posts, passwords) VALUES('Thamirez', 'thami@gmail.com','5511958011441', 'Parabéns pela loja', 456);
INSERT INTO fseletro.peoples (names, email, phones, posts, passwords) VALUES('Diego', 'diego@gmail.com', '5511998369001', 'Chegamos aqui', 789);