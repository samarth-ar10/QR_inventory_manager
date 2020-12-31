<?php
	$servername = "localhost";
	$username = "u435831842_samarth";
	$password = "Samarth8800109608";
	$dbname = "u435831842_fenrir_website";
	$comment = "initiating database connection";
	$db = new mysqli($servername, $username, $password, $dbname);
	if($db->connect_errno)
		echo "connection not established".$db->connect_error;
?>