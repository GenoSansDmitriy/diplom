<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Приветствие</title>
</head>
<body>
    
<?php
    require_once("./php/menu.html");
?>

<main>
    <img src="<?= $userimg ?>" alt="user" class="user-img">
    <p align='center'>Добро пожаловать, <br>
        <b><?= $username ?></b>, <br>
        готовы приступить к работе?
    </p>
</main>

<?php
    require_once("./php/footer.html");
?>

</body>
</html>
