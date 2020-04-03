<?php
	
$result=mail("test@test.ru","Ancheta Site","Din Site am primit urmatoarele date: \nNumele: $_POST[name] \nParola: $_POST[password] \nFace economie de timp: $_POST[time] \nCate ore doarme pe zi: $_POST[sleep]");

if ($result) {
	echo "<p>Mesajul a fost expediat cu succes!</p>";
}

else {
	echo "<p>Mesajul NU a fost expediat!</p>";
}
	
?> 