<?php

    require "./Models/Order.php";

    $order = new Order;
    $order->namesC = $_POST['namesC'];
    $order->phonesC= $_POST['phonesC'];
    $order->addressC = $_POST['addressC'];
    $order->descriptionProducts = $_POST['descriptionProducts'];
    $order->pricesEnd = $_POST['pricesEnd'];
    $order->amount = $_POST['amount'];

   $validate = $order->registerOrder();

   if($validate == true) {
       echo json_encode(true);
   } else {
       echo json_encode(false);
   }
