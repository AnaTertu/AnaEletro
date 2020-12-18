<?php

    require "./Models/Product.php";

    header("Access-Control-Allow-Origin:*"); //Permite que outras aplicações consumam a api
    header("Content-type: application/json"); //Indicação de arquivos Json 

    $products = Product::getAll();

    echo json_encode($products);
