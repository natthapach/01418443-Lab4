<?php 
	$ldl = $_GET["ldl"];
	$hdl = $_GET["hdl"];
	$tri = $_GET["tri"];

	if ($ldl < 100) {
		$ldl_level = 0;
	}elseif (100 <= $ldl and $ldl <= 129) {
		$ldl_level = 1;
	}elseif (130 <= $ldl and $ldl <= 159) {
		$ldl_level = 2;
	}elseif (160 <= $ldl and $ldl <= 189) {
		$ldl_level = 3;
	}else{
		$ldl_level = 4;
	}

	if ($hdl >= 60) {
		$hdl_level = 0;
	}elseif (41 <= $hdl and $hdl <= 59) {
		$hdl_level = 1;
	}else{
		$hdl_level = 2;
	}

	if ($tri < 150) {
		$tri_level = 0;
	}elseif (150 <= $tri and $tri <= 199) {
		$tri_level = 1;
	}elseif (200 <= $tri and $tri <= 499) {
		$tri_level = 2;
	}else{
		$tri_level = 3;
	}

	$chol = $ldl + $hdl + ($tri/5);

	if ($chol < 200) {
		$chol_level = 0;
	}elseif (200 <= $chol and $chol <= 239) {
		$chol_level = 1;
	}else{
		$chol_level = 2;
	}

	$data = array('ldl_level' => $ldl_level,
	 				'hdl_level' => $hdl_level,
	 				'tri_level' => $tri_level,
	 				'chol' => $chol,
	 				'chol_level' => $chol_level);
	echo json_encode($data);

?>