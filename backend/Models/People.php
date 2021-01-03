<?php

    require "Connection.php";

    class People
    {
        public $nameC;
        public $email;
        public $phones;
        public $posts;
        public $passwords;

        public static function getAll()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT * FROM fseletro.people");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function registerPeople()
        {
            $connection = Connection::getDb(); 

            $stmt = $connection->query("INSERT INTO fseletro.people(nameC, email, phones, posts, passwords) values ('$this->nameC','$this->email','$this->phones', '$this->posts', '$this->passwords')"); 
          
            $rouss = $stmt->rowCount();
            
            if ($rouss>0) {
                return true;
            } else {
                return false;
            }               
        } 
        
            public static function getTotalPeople()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT count(*) as total_people from people");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

    }
