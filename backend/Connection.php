<?php

    class Connection
    {

        public static function getDb()
        {
            $conn = new PDO(
                "mysql:host=192.168.0.164;dbname=fseletro;charset=utf8",
                "anatertu",
                "123456"
            );

            if ($conn){
                return $conn;
            }
            else {
                echo "<h1>Erro ao realizar conexão</h1>";
            }
        }
    }
