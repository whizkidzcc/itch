<?php

    define ("COOKIE_USER_ID", "user_id");
    define ("COOKIE_USERNAME", "username");
    function delete_user_info () {
            setcookie(COOKIE_USER_ID, null, time() - 18000, "/");
            setcookie(COOKIE_USERNAME, null, time() - 18000, "/");
            echo $_COOKIE[COOKIE_USERNAME];
            echo COOKIE_USER_ID . $_COOKIE[COOKIE_USER_ID];
    }
    
    function connect_pdo () {
        $servername = getenv("IP");
        $username = "root";
        $password = "";
        $database = "c9";
        $dbport = 3306;
        $pdo = new PDO("mysql:host=" . $servername . ";dbname=" . $database, $username, $password);
        return($pdo);
    }
?>