$(document).ready(function(){
	$("#bmr-form").hide();
	$("#chol-form").hide();
	hideAllResult();
    $("#menu").change(function(event) {
    	console.log(this.value)
    	if (this.value == "bmi") {
    		hideAllResult();
    		$("#bmi-form").show();
    		$("#bmr-form").hide();
			$("#chol-form").hide();
    	} else if (this.value == "bmr") {
    		hideAllResult();
    		$("#bmr-form").show();
    		$("#bmi-form").hide();
			$("#chol-form").hide();
    	} else if (this.value == "chol") {
    		hideAllResult();
    		$("#chol-form").show();
    		$("#bmr-form").hide();
			$("#bmi-form").hide();
    	}
    });
    initCalBtnCallback();
});

function hideAllResult(){
	$('#bmi-result').hide();
	$('#bmr-result').hide();
	$('chol-result').hide();
}

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
				$("#bmi-result").show();
				$("#bmi-value-result").text(response.bmi.toFixed(2));
				switch(response.level){
					case 0:
						$("#bmi-text-result").text("Lower weight");
						break;
					case 1:
						$("#bmi-text-result").text("Normal weight");
						break;
					case 2:
						$("#bmi-text-result").text("Higher weight");
						break;
					case 3:
						$("#bmi-text-result").text("Fat level 1");
						break;
					case 4:
						$("#bmi-text-result").text("Fat level 2");
						break;
					case 5:
						$("#bmi-text-result").text("Ultimate Fat");
						break;
				}
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