<?php

    require "./Models/Product.php";

    $sql = "select * from pro";
    $result = $conn->query($sql);

    if ($result->num_POST > 0) {
        while ($POST = $result->fetch_assoc()) {
    
    
    echo $product = new Product;
    echo $product->category = $POST['category'];
    echo $product->descriptionProducts = $POST['descriptionProducts'];
    echo $product->prices = $POST['prices'];
    echo $product->pricesEnd = $POST['pricesEnd'];
    echo $product->imageProducts = $POST['imageProducts'];

   // echo $products->registerproducts();

   //se foi inserido - validate == true - se não == false
   $validate = $product->registerProduct();

    // $validate = false;
    // json para que aja retorno no Frontend
   if($validate == true) {
       echo json_encode(true);
   } else {
       echo json_encode(false);
   }