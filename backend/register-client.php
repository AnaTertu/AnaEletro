<?php

    require "./Models/People.php";

    $people = new People;
    $people->nameC = $_POST['nameC'];
    $people->email = $_POST['email'];
    $people->phones = $_POST['phones'];
    $people->posts = $_POST['posts'];
    $people->passwords = $_POST['passwords'];

   $validate = $people->registerPeople();

   if($validate == true) {
       echo json_encode(true);
   } else {
       echo json_encode(false);
   }
