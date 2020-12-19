<?php

    require "Connection.php";

    class People
    {
        public $id;
        public $names;
        public $email;
        public $phones;
        public $posts;
        public $passwords;

        public static function getAll()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT * FROM fseletro.peoples");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function registerPeople()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("INSERT INTO fseletro.peoples(names, email, phones, posts, passwords) values ('$this->names', '$this->email','$this->phones', '$this->posts', '$this->passwords')"); 
          
            if ($stmt->rowCount()>0) {
                return true;
            } else {
                return false;
            }      
        }
    }
