<?php
	$servername = "127.0.0.1";
	$username = "phpmyadmin";
	$password = "1234";
	$dbname = "test";
	$comment = "initiating database connection";
	$db = new mysqli($servername, $username, $password, $dbname);
	if($db->connect_errno)
		echo "connection not established".$db->connect_error;

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$name = $_POST["name"];
		$item = $_POST["item"];
		$date = $_POST["date"];
		$method = $_POST["method"];
		$sql = "";
		if(!strcmp($method,"0"))
			$sql = "INSERT INTO `test`(`Name`, `Item`, `Date`, `Transaction`) VALUES ('$name','$item','$date','TAKE')";
		else
			$sql = "INSERT INTO `test`(`Name`, `Item`, `Date`, `Transaction`) VALUES ('$name','$item','$date','SUBMIT')";
		$result = $db->query($sql);
		if (!$result) {
			echo "query not passed - ".$result->error;
		}
		else
			echo "query passed";
	}

?>