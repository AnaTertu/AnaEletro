    <?php

    require "Connection.php";

    class Product
    {
            public $idproducts;
            public $category;
            public $descriptionProducts;
            public $prices;
            public $pricesEnd;
            public $imageProducts;

        public static function getAll()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT * FROM fseletro.products");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        // public function registerProduct()
        // {
        //     $connection = Connection::getDb();

            
        //     $stmt = $connection->query("INSERT INTO fseletro.products(category, descriptionProducts, prices, pricesEnd, imageProducts) values ('$this->category', '$this->descriptionProducts', '$this->prices', '$this->pricesEnd', '$this->imageProducts')"); 
           
        //     if ($stmt->rowCount()>0) {
        //         return true;
        //     } else {
        //         return false;
        //     }
               
        // }
        

    }
