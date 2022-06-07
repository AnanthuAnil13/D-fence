<?php
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: *");

        $url = $_GET['senturl'];
        $ip = $_GET['sentip'];

        $output = shell_exec('sudo /var/www/html/docker.sh "'.$url.'" "'.$ip.'"');

        echo $output;
?>
