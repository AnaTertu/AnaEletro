<?php

    require "./Models/People.php";

    $people = new People;
    $people->names = $_POST['names'];
    $people->phones = $_POST['phones'];
    $people->posts = $_POST['posts'];

   // echo $people->registerPeople();

   //se foi inserido - validate == true - se não == false
   $validate = $people->registerPeople();

    // $validate = false;
    // json para que aja retorno no Frontend
   if($validate == true) {
       echo json_encode(true);
   } else {
       echo json_encode(false);
   }

