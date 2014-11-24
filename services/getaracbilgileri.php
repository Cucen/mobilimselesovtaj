<?php
include 'config.php';

$sql = "select * from akaryakitturu " .
		"inner join belgeturu on belgeturu.ortak=akaryakitturu.ortak".
		"inner join kullanimtarzi on kullanimtarzi.ortak=akaryakitturu.ortak ".
		"inner join marka on marka.ortak=akaryakitturu.ortak ".
		"inner join vitesturu on vitesturu.ortak=akaryakitturu.ortak ".
		"where akaryakitturu.ortak = :id";
	
try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET['id']);
	$stmt->execute();
	$doktorliste = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($doktorliste) .'}';
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>