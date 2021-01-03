<?php

    require "Connection.php";

    class Order
    {
        public $namesC;
        public $phonesC;
        public $addressC;
        public $descriptionProducts;
        public $pricesEnd;
        public $amount;

        public static function getAll()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT * FROM fseletro.order");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function registerOrder()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("INSERT INTO fseletro.order(namesC, phonesC, addressC, descriptionProducts, pricesEnd, amount) values ('$this->namesC',  '$this->phonesC', '$this->addressC','$this->descriptionProducts', '$this->pricesEnd', '$this->amount')"); 
           
            $rouss = $stmt->rowCount();

            if ($rouss->rowCount()>0) {
                return true;
            } else {
                return false;
            }       
        }

            public static function getTotalOrder()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT count(*) as total_order from order");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

    }
