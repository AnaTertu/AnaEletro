DROP DATABASE IF EXISTS fullstackeletro;
CREATE DATABASE IF NOT EXISTS fullstackeletro;

CREATE TABLE fullstackeletro;

 SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
    START TRANSACTION;
    SET time_zone = "+00:00";

CREATE TABLE fullstackeletro.peoples(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    names VARCHAR(80) NOT NULL,
    phones VARCHAR(20) NOT NULL,
    posts VARCHAR(200)
);

CREATE TABLE fullstackeletro.products(
	idproducts INT NOT NULL PRIMARY KEY auto_increment,
    nomeimagem VARCHAR(45) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    preco DECIMAL(8,2) NOT NULL,
    precofinal DECIMAL(8,2) NOT NULL,
    imagem VARCHAR(255) NOT NULL
    ) comment = 'Produtos anúnciados na loja FullStackEletro.';

 INSERT INTO produtos (idprodutos, nomeimagem, descricao, preco, precofinal, imagem) 

  VALUES
  (default, 'geladeira', 'geladeira frost free brastemp side inverse 540 litros', 6389.00, 5019.00, 'imagens/geladeira_brastemp.jpg'),
  (default, 'geladeira', 'geladeira frost free brastemp branca 375 litros', 2068.60, 1910.90, 'imagens/refrigerador_brastemp.png'),
  (default, 'geladeira', 'geladeira frost free consul prata 340 litros', 2199.90, 2069.00, 'imagens/refrigerador_consul.png'),
  (default, 'fogao', 'fogão 4 bocas consul inox com mesa de vidro', 1150.50, 1129.00, 'imagens/fogao_consul.jpg'),
  (default, 'fogao', 'fogão de piso 4 bocas atlas monaco com acendimento automático', 609.00, 519.70, 'imagens/fogao_monaco.jpeg'),
  (default, 'microondas', 'microondas consul 32 litros inox 220v', 580.00, 409.88, 'imagens/microndas_consul.png'),
  (default, 'microondas', 'microondas 25 litros espelhado philco 220', 508.70, 464.53, 'imagens/microondas_philco.png'),
  (default, 'microondas', 'forno de microondas electroluz 20l branco 110v', 459.90, 436.05, 'imagens/microondas_electroluz.jpeg'),
  (default, 'lavalouca', 'lava-louça electrolux inox com 10 serviços, 6 programas de lavagens', 3599.00, 2799.90, 'imagens/lava_loucas_electroux.jpg'),
  (default, 'lavalouca', 'lava-louças compacta 8 serviços branca 127v brastemp', 1970.50, 1730.61, 'imagens/lava_loucas_brastemp.jpg'),
  (default, 'lavaroupa', 'lavadadora de roupas brastemp 11kg com turbo performace branca', 1699.00, 1214.10, 'imagens/lavadora_brastemp.jpg'),
  (default, 'lavaroupa', 'lavadora philco inverter 12kg', 2399.90, 2179.90, 'imagens/lavadora_philco.jpeg');



INSERT INTO people (id, names, phones, posts) VALUES(default,'Ana Tertuliano', '551198459845', "Olá, mundo!");
INSERT INTO people (id, names, phones, posts) VALUES(default,'Elnatan', '5511952935270', 'Ótimos produtos.');
INSERT INTO people (id, names, phones, posts) VALUES(default,'Thamirez', '5511958011441', 'Parabéns pela loja');
INSERT INTO people (id, names, phones, posts) VALUES(default, 'Diego', '5511998369001', 'Chegamos aqui');