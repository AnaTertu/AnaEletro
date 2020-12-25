<?php

    require "./Models/Product.php";
    
    $product = new Product;
    $product->category = $_POST['category'];
    $product->descriptionProducts = $_POST['descriptionProducts'];
    $product->prices = $_POST['prices'];
    $product->pricesEnd = $_POST['pricesEnd'];
    $product->imageProducts = $_POST['imageProducts'];

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