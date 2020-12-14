DROP DATABASE IF EXISTS fullstackeletro;
CREATE DATABASE IF NOT EXISTS fullstackeletro;

CREATE TABLE fullstackeletro;

CREATE TABLE fullstackeletro.peoples(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    names VARCHAR(80) NOT NULL,
    phones VARCHAR(20) NOT NULL,
    posts VARCHAR(200)
);

INSERT INTO people (id, names, phones, posts) VALUES(default,'Ana Tertuliano', '551198459845', "Olá, mundo!");
INSERT INTO people (id, names, phones, posts) VALUES(default,'Elnatan', '5511952935270', 'Ótimos produtos.');
INSERT INTO people (id, names, phones, posts) VALUES(default,'Thamirez', '5511958011441', 'Parabéns pela loja');
INSERT INTO people (id, names, phones, posts) VALUES(default, 'Diego', '5511998369001', 'Chegamos aqui');