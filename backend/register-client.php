<?php

    require "./Models/People.php";

    $peoples = new People;
    $peoples->nameC = $_POST['nameC'];
    $peoples->email = $_POST['email'];
    $peoples->phones = $_POST['phones'];
    $peoples->posts = $_POST['posts'];
    $peoples->passwords = $_POST['passwords'];

   // echo $peoples->registerPeople();

   //se foi inserido - validate == true - se não == false
   $validate = $peoples->registerPeople();

    // $validate = false;
    // json para que aja retorno no Frontend
   if($validate == true) {
       echo json_encode(true);
   } else {
       echo json_encode(false);
   }
