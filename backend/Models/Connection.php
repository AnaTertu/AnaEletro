<?php
class Connection
{

    public static function getDb()
    {
        $servername = "192.168.0.164";
        $username = "anatertu";
        $password = "123456";
        $database = "fseletro";

        echo "!!!Iniciando conexão!!!";
        $conn = new PDO("mysql:host=", $servername, ";dbname=", $database, $username, $password);
        echo "<h1>sucesso conexão</h1>";

        if ($conn){
            return $conn;
        }
        else {
            echo "<h1>Erro ao realizar conexão</h1>";
        }
    }
}