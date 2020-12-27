<?php

    require "./Models/Order.php";

    header("Access-Control-Allow-Origin:*"); //Permite que outras aplicações consumam a api
    header("Content-type: application/json"); //Indicação de arquivos Json 

    $requests = Order::getAll();

    echo json_encode($requests);
