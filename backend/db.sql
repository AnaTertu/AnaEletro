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
    
 INSERT INTO fseletro.products (category, descriptionProducts, prices, pricesEnd, imageProducts) 
VALUES 
  ('geladeira','geladeira frost free brastemp side inverse 540 litros', 6389.00, 5019.00, 'imag/geladeira_brastemp.jpg'),
  ('geladeira', 'geladeira frost free brastemp branca 375 litros', 2068.60, 1910.90, 'imag/refrigerador_brastemp'),
  ('geladeira', 'geladeira frost free consul prata 340 litros', 2199.90, 2069.00, 'imag/refrigerador_consul'),
  ('fogao', 'fogão 4 bocas consul inox com mesa de vidro', 1150.50, 1129.00, 'imag/fogao_consul'),
  ('fogao', 'fogão de piso 4 bocas atlas monaco com acendimento automático', 609.00, 519.70, 'imag/fogao_monaco'),
  ('microondas', 'microondas consul 32 litros inox 220v', 580.00, 409.88, 'imag/microndas_consul'),
  ('microondas', 'microondas 25 litros espelhado philco 220', 508.70, 464.53, 'imag/microondas_philco'),
  ('microondas', 'forno de microondas electroluz 20l branco 110v', 459.90, 436.05, 'imag/microondas_electroluz'),
  ('lavalouca', 'lava-louça electrolux inox com 10 serviços, 6 programas de lavagens', 3599.00, 2799.90, 'imag/lava_loucas_electroux'),
  ('lavalouca', 'lava-louças compacta 8 serviços branca 127v brastemp', 1970.50, 1730.61, 'imag/lava_loucas_brastemp'),
  ('lavaroupa', 'lavadadora de roupas brastemp 11kg com turbo performace branca', 1699.00, 1214.10, 'imag/lavadora_brastemp'),
  ('lavaroupa', 'lavadora philco inverter 12kg', 2399.90, 2179.90, 'imag/lavadora_philco');

INSERT INTO fseletro.peoples (names, email,phones, posts, passwords) VALUES('Ana Tertuliano', 'ana@gmail', '551198459845', "Olá, mundo!", 12345678);
INSERT INTO fseletro.peoples (names, email,phones, posts, passwords) VALUES('Elnatan', 'elnatan@gmail.com','551195293527', 'Ótimos produtos.', 123);
INSERT INTO fseletro.peoples (names, email,phones, posts, passwords) VALUES('Thamirez', 'thami@gmail.com','5511958011441', 'Parabéns pela loja', 456);
INSERT INTO fseletro.peoples (names, email,phones, posts, passwords) VALUES('Diego', 'diego@gmail.com', '5511998369001', 'Chegamos aqui', 789);
