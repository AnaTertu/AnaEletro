<?php

    require "./Models/People.php";

    header("Access-Control-Allow-Origin:*"); //Permite que outras aplicações consumam a api
    header("Content-type: application/json"); //Indicação de arquivos Json 

    $people = People::getAll();

    echo json_encode($people);
