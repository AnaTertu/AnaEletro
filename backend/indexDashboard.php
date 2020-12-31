<?php
    require "./Models/People.php";

    header("Access-Control-Allow-Origin:*");  // Permite que outras aplicações acessem a api
   // header("Content-type: application/json";)  //Indicação de arquivos Json
    
    $peoples = People::getAll();


echo json_encode($people);
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
        <title>AnaEletro</title>
    </head>
    <body>
        
        <?php require "../frontend/header.html"?>
        
        <main class="py-5" style="min-height: 90vh; height: auto">
            <?php foreach ($peoples as $people) { ?>
                <div class="card w-50 mx-auto mt-4">
                    <div class="card-header">
                        <?= $people['names'] ?>
                    </div>
                    <div class="card-body">
                        <?= $people['posts'] ?>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-end">
                        <a class="btn btn-success" href="https://wa.me/<?= $people['phones'] ?>"> 
                            <i class="fab fa-whatsapp" style="font-size: 24px"></i>                            
                        </a>
                    </div>
                </div>
            <?php } ?>
        </main>        
    </body>
</html>
