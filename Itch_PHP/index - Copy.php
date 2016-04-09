<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Itch</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/style.css" rel="stylesheet" />
    </head>
    <body>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
        <div id="header"><a href="php/login.php"></a> <a href="php/register.php"></a></div>
        <div id="dialog" title="Sign Up">
            <h2>Register</h2>
            <form action="register.php" method="post">
                <input type="text" name="name" placeholder="username" required/>
                <input type="password" name="password" placeholder="password" required/>
                <input type="password" name="password_repeat" placeholder="repeat password" required/>
                <input type="submit" value="Register" />
            </form>
        </div>
        <script>
            $(function() {
                $( "#dialog" ).dialog();
            });
        </script>
    </body>
</html>
