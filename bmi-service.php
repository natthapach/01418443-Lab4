<?php 
	$height = $_GET["height"];
	$weight = $_GET["weight"];
	$bmi = 0;
	if ($height != 0) {
		$bmi = $weight / pow(($height*0.01), 2);
	}
	$level = 0;
	if ($bmi < 18.5) {
		$level = 0;
	}elseif ($bmi >= 18.5 and $bmi <= 23.4) {
		$level = 1;
	}elseif ($bmi >= 23.5 and $bmi <= 28.4) {
		$level = 2;
	}elseif ($bmi >= 28.5 and $bmi <= 34.9) {
		$level = 3;
	}elseif ($bmi >= 35.0 and $bmi <= 39.9) {
		$level = 4;
	}else{
		$level = 5;
	}
	$data = array("bmi"=>$bmi, "level"=>$level);
	echo json_encode($data);
?>