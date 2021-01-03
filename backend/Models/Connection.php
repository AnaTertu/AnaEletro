<?php
class Connection
{

    public static function getDb()
    {
        // $servername = "192.168.0.164";
        // $username = "anatertu";
        // $password = "123456";
        // $database = "fseletro";

        //Criar as constantes com as credencias de acesso ao banco de dados
        define('HOST', '192.168.0.164');
        define('USER', 'anatertu');
        define('PASS', '123456');
        define('DBNAME', 'fseletro');
        // define('PORT', '3306');

        try {
            echo "!!!Iniciando conexão!!!";
            //Criar a conexão com banco de dados usando o PDO
            $conn = new pdo('mysql:host=' . HOST . ';dbname=' . DBNAME, USER, PASS);
            echo "<h1>sucesso conexão</h1>";
        } catch (PDOException $e) {
            echo "Erro: Conexão com banco de dados não foi realizada com sucesso. Erro gerado " . $e->getMessage();
        }

        if ($conn){
            return $conn;
        }
        else {
            echo "<h1>Erro ao realizar conexão</h1>";
        }
    }
}