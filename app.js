$(document).ready(function(){
	$("#bmr-form").hide();
	$("#chol-form").hide();
    $("#menu").change(function(event) {
    	console.log(this.value)
    	if (this.value == "bmi") {
    		$("#bmi-form").show();
    		$("#bmr-form").hide();
			$("#chol-form").hide();
    	} else if (this.value == "bmr") {
    		$("#bmr-form").show();
    		$("#bmi-form").hide();
			$("#chol-form").hide();
    	} else if (this.value == "chol") {
    		$("#chol-form").show();
    		$("#bmr-form").hide();
			$("#bmi-form").hide();
    	}
    });
    initCalBtnCallback();
});

function initCalBtnCallback(){
	$("#btn-cal-bmi").click(function(event) {
		let height = $("#input-bmi-height").val();
		let weight = $("#input-bmi-weight").val();
		let data = {
			height : height,
			weight : weight
		};
		console.log(data);
		$.ajax({
			url: 'bmi-service.php',
			type: 'get',
			dataType: 'json',
			data: data,
			success:function (response){
				console.log(response);
			}
		});
		
	});
	$("#btn-cal-bmr").click(function(event) {
		let height = $("#input-bmr-height").val();
		let weight = $("#input-bmr-weight").val();
		let age = $("#input-bmr-age").val();
		let gender;
		if ($("#radio-male").prop("checked", true)) {
			gender = "male";
		} else {
			gender = "female";
		}
		let activity = $("#input-bmr-activity").val();
		let data = {
			height : height,
			weight : weight,
			age : age,
			gender : gender,
			activity : activity
		};
		console.log(data);
		$.ajax({
			url: 'bmr-service.php',
			type: 'get',
			dataType: 'json',
			data: data,
			success:function(response){
				console.log(response);
			}
		});
		
		
	});
	$("#btn-cal-chol").click(function(event) {
		let ldl = $("#input-chol-LDL").val();
		let hdl = $("#input-chol-HDL").val();
		let tri = $("#input-chol-tri").val();
		let data = {
			ldl : ldl,
			hdl : hdl,
			tri : tri
		};
		console.log(data);
		$.ajax({
			url: "cholesterol-service.php",
			type: "get",
			dataType: "json",
			data: data,
			success: function(response){
				console.log(response);
			}
		})
	});
}