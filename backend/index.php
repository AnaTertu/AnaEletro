<?php

    require"./Models/People.php";

    $peoples = people::getAll();

    print_r(json_encode($peoples));
