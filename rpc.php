<?php
require("local_settings.php");
require("settings.php");
$DB = new PDO('oci:dbname=//localhost:1521/dbwc', DB_USER, DB_PASS);
$view = $_POST['view'];
$stm = $DB->prepare("SELECT * FROM ?");
$stm->execute(array($view));
$res = $stm->fetchAll();
print json_encode($res);
?>
