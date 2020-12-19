<?php

    require "Connection.php";

    class Order
    {
        public $id;
        public $namesC;
        public $phonesC;
        public $descriptionProducts;
        public $pricesEnd;
        public $amount;

        public static function getAll()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT * FROM fseletro.requests");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function registerPeople()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("INSERT INTO fseletro.requests(namesC, addressC, phonesC, (SELECT * FROM fseletro.products (descriptionProducts, pricesEnd) amount, AS (pricesEnd * amount)) values ('$this->namesC', '$this->addressC', '$this->phonesC', '$this->descriptionProducts', '$this->pricesEnd', '$this->amount')"); 
           
            if ($stmt->rowCount()>0) {
                return true;
            } else {
                return false;
            }
               
        }
        

    }
