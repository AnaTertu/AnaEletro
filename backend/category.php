<?php
    require "./Models/Category.php";

    header("Access-Control-Allow-Origin:*");

    header("Content-type: application/json");

    $category = Category::getAll();

    echo json_encode($category);