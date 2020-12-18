<?php

    require "Connection.php";

    class People
    {
        public $id;
        public $names;
        public $phones;
        public $posts;

        public static function getAll()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT * FROM fseletro.peoples");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function registerPeople()
        {
            $connection = Connection::getDb();

            //1 registros inserido com sucesso insomina e no bd
            $stmt = $connection->query("INSERT INTO fseletro.peoples(names, phones, posts) values ('$this->names', '$this->phones', '$this->posts')"); 
           //3 registros removidos com sucesso insomina e no bd
           // $stmt = $connection->query("DELETE FROM peoples WHERE id = 2 OR id = 3 OR id = 4"); 
            
           //verifica a quanti//e de linhas afetadas
           // return $stmt->rowCount(); 

           //se um registro foi inserido, então tome uma ação ou então tome outra
            if ($stmt->rowCount()>0) {
                return true;
            } else {
                return false;
            }
               
        }
        

    }
