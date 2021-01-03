<?php
class Connection
{

    public static function getDb()
    {
        $servername = "192.168.0.164";
        $username = "anatertu";
        $password = "123456";
        $database = "fseletro";
        
        echo "<h1>Iniciando conexão</h1>";
        $conn = mysql_connect($servername, $username, $password, $database);

        if ($conn){
            return $conn;
        }
        else {
            echo "<h1>Erro ao realizar conexão</h1>";
        }
    }
}