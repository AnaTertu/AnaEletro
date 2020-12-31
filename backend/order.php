<?php

    require "./Models/Order.php";

    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");

    $order = Order::getAll();

    echo json_encode($order);
