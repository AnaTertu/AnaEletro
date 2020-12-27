<?php

    require "./Models/Order.php";

    $requests = new Order;
    $requests->namesC = $_POST['namesC'];
    $requests->phonesC= $_POST['phonesC'];
    $requests->addressC = $_POST['addressC'];
    $requests->descriptionProducts = $_POST['descriptionProducts'];
    $requests->pricesEnd = $_POST['pricesEnd'];
    $requests->amount = $_POST['amount'];

   $validate = $requests->registerOrder();

   if($validate == true) {
       echo json_encode(true);
   } else {
       echo json_encode(false);
   }
