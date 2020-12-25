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
    }
