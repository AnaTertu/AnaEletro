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
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    names VARCHAR(80) NOT NULL,
    phones VARCHAR(20) NOT NULL,
    posts VARCHAR(200)
) comment = 'Clientes da loja fseletro.';

CREATE TABLE fseletro.requests (
    idrequests INT NOT NULL  PRIMARY KEY AUTO_INCREMENT,
    names VARCHAR(45) NOT NULL,
    addressClient VARCHAR(150),
    phones INT NOT NULL,
    descriptionProducts VARCHAR(150),
    pricesEnd DECIMAL(8,2),
    amount INT,
    totalValue DECIMAL(8,2) AS (pricesEnd * amount)
    ) comment = 'Produtos anunciados na loja fseletro';
    
INSERT INTO fseletro.requests 

SELECT fseletro.requests
 "Ana Tertuliano", 
 "Rua A, 50", 
 "5511941969894", 
 1, 
 "geladeira", 
 pricesEnd (products.pricesEnd),
  2
  5019.00 * 2
FROM
  fseletro.products
  
WHERE
  products.descriptionProducts= "geladeira frost free brastemp side inverse 540 litros"
  products.pricesEnd= 5019.00
 

 -- 'Elnathan', 'Rua B,50', '551195293527', 1, 'lavalouca', 3599.00, 2, 7168.00;
--  'Thamirez', 'Rua C,50', '551195801144', 1, 'lavaroupa', 2179.90, 2, 6538.80;



 INSERT INTO fseletro.products (category, descriptionProducts, prices, pricesEnd, imageProducts) 
VALUES 
  ('geladeira','geladeira frost free brastemp side inverse 540 litros', 6389.00, 5019.00, 'https://cdn.pixabay.com/photo/2017/10/07/16/39/fridge-2827034__340.png'),
  ('geladeira', 'geladeira frost free brastemp branca 375 litros', 2068.60, 1910.90, 'https://cdn.pixabay.com/photo/2016/12/07/09/41/refrigerator-1889067__340.jpg'),
  ('geladeira', 'geladeira frost free consul prata 340 litros', 2199.90, 2069.00, 'https://cdn.pixabay.com/photo/2013/07/13/11/46/refrigerator-158634__340.png'),
  ('fogao', 'fogão 4 bocas consul inox com mesa de vidro', 1150.50, 1129.00, 'https://cdn.pixabay.com/photo/2017/02/14/07/56/cooking-2065132__340.jpg'),
  ('fogao', 'fogão de piso 4 bocas atlas monaco com acendimento automático', 609.00, 519.70, 'https://cdn.pixabay.com/photo/2014/03/24/17/08/cooker-295136__340.png'),
  ('microondas', 'microondas consul 32 litros inox 220v', 580.00, 409.88, 'https://cdn.pixabay.com/photo/2019/12/20/22/10/microwave-4709390__340.png'),
  ('microondas', 'microondas 25 litros espelhado philco 220', 508.70, 464.53, 'https://cdn.pixabay.com/photo/2020/05/08/09/23/appliance-5144884__340.jpg'),
  ('microondas', 'forno de microondas electroluz 20l branco 110v', 459.90, 436.05, 'https://cdn.pixabay.com/photo/2020/08/06/10/26/microwave-5467538__340.png'),
  ('lavalouca', 'lava-louça electrolux inox com 10 serviços, 6 programas de lavagens', 3599.00, 2799.90, 'https://cdn.pixabay.com/photo/2013/07/12/14/42/dishwasher-148627__340.png'),
  ('lavalouca', 'lava-louças compacta 8 serviços branca 127v brastemp', 1970.50, 1730.61, 'https://cdn.pixabay.com/photo/2019/05/24/21/23/mug-4227275__340.jpg'),
  ('lavaroupa', 'lavadadora de roupas brastemp 11kg com turbo performace branca', 1699.00, 1214.10, 'https://cdn.pixabay.com/photo/2016/12/07/09/46/washing-machine-1889088__340.jpg'),
  ('lavaroupa', 'lavadora philco inverter 12kg', 2399.90, 2179.90, 'https://cdn.pixabay.com/photo/2017/01/20/11/40/washing-machine-1994661__340.png');

INSERT INTO fseletro.peoples (names, phones, posts) VALUES('Ana Tertuliano', '551198459845', "Olá, mundo!");
INSERT INTO fseletro.peoples (names, phones, posts) VALUES('Elnathan', '551195293527', 'Ótimos produtos.');
INSERT INTO fseletro.peoples (names, phones, posts) VALUES('Thamirez', '5511958011441', 'Parabéns pela loja');
INSERT INTO fseletro.peoples (names, phones, posts) VALUES('Diego', '5511998369001', 'Chegamos aqui');
