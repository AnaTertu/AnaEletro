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

            $stmt = $connection->query("SELECT * FROM peoples");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public static function getTotalPeoples()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT count(*) as total_peoples from peoples");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }
