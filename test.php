<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");

	$url = $_GET['senturl'];
	$output = shell_exec('sudo /var/www/html/docker.sh "'.$url.'"');	
	echo $output;
	//$dockerurl = "http://25.9.115.112:".$output[1];
	//echo $dockerurl;

	//var_dump($_REQUEST);
	//$ip = "255.255.255.255";
	//$servername = "localhost";
	//$username = "username";
	//$password = "Password123@";
	//$dbname = "urldb";

	// Create Connection
	//$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	//if (!$conn) {
//		die("Connection Failed: " . mysqli_connect_error());
//	}

//	$sql = "INSERT INTO Link_Table (link, ip) VALUES (".$recievedurl.",".$ip.")";
//	try {
//		if (mysqli_query($conn, $sql)) {
//			var_dump("New record created successfully");
//		} else {
//			var_dump("DB Entry Error");
//		}
//	} catch(Exception $e) {
//		var_dump("Try_Catch Error");
//	}
//	mysqli_close($conn);
?>
