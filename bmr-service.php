<?php
	$height = $_GET["height"];
	$weight = $_GET["weight"];
	$age = $_GET["age"];
	$gender = $_GET["gender"];
	$activity = $_GET["activity"];

	if ($gender == "male") {
		$bmr = 66 + (13.7*$weight) + (5*$height) - (6.8*$age);
	}else{
		$bmr = 665 + (9.6*$weight) + (1.8*$height) - (4.7*$age);
	}

	switch ($activity) {
		case 0:
			$tdee = $bmr*1.2;
			break;
		case 1:
			$tdee = $bmr*1.375;
			break;
		case 2:
			$tdee = $bmr*1.55;
			break;
		case 3:
			$tdee = $bmr*1.725;
			break;
		case 4:
			$tdee = $bmr*1.9;
			break;
		default:
			$tdee = 0;
			break;
	}
	$data = array('bmr' => $bmr, "tdee" => $tdee);
	echo json_encode($data);
?>