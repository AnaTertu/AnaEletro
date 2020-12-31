<?php
    require "Models/People.php";
    $total = People::getTotalPeoples();
?>
<!--acima eu executo a class apartir dela mesma
    $people = new People;
    $total = $people->getTotalPeoples();  -->
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>AnaEletro</title>
    </head>
    <body>
       
        <?php require "../frontend/header.html"?>
       
        <main class="py-2" style="min-height: 90vh; height: auto; background-color: #ccc ">
            
            <div class="card d-flex align-items-center justify-content-center" style="width: 350px; height: 80vh; margin: 5vh auto">
                
                <canvas id="myChart" width="300" height="300"></canvas>

            </div>

        </main> 
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
        
        <script>

            var ctx = document.getElementById('myChart').getContext('2d');

            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Clientes', 'Geladeiras', 'Fogões', 'Microondas', 'Lava-roupa', 'Lava-Louças'],
                datasets: [{
                    label: '# of Votes',
                    data: [<?= $total[0]["total_peoples"] ?>, 3, 2, 3, 2, 2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
            });
        </script>
    </body>
</html>