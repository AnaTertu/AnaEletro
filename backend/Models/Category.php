<?php

require "Connection.php";

class Category
{
    public $idCategory;
    public $category;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection -> query("SELECT * FROM fseletro.category");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}