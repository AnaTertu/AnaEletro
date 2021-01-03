<?php
class Connection
{

    public static function getDb()
    {
        $servername = "192.168.0.164";
        $username = "anatertu";
        $password = "123456";
        $database = "fseletro";

        $conn = mysql_connect($servername, $username, $password, $database);

        if ($conn){
            return $conn;
        }
        else {
            echo "<h1>Erro ao realizar conexão</h1>";
        }
    }
}