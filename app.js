$(document).ready(function(){
	$("#bmr-form").hide();
	$("#chol-form").hide();
	hideAllResult();
    $("#menu").change(function(event) {
    	console.log(this.value)
    	if (this.value == "bmi") {
    		hideAllResult();
    		$("#bmi-form").show("slow");
    		$("#bmr-form").hide();
			$("#chol-form").hide();
    	} else if (this.value == "bmr") {
    		hideAllResult();
    		$("#bmr-form").show("slow");
    		$("#bmi-form").hide();
			$("#chol-form").hide();
    	} else if (this.value == "chol") {
    		hideAllResult();
    		$("#chol-form").show("slow");
    		$("#bmr-form").hide();
			$("#bmi-form").hide();
    	}
    });
    initCalBtnCallback();
});

function hideAllResult(){
	$('#bmi-result').hide();
	$('#bmr-result').hide();
	$('#chol-result').hide();
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
				$("#bmi-result").show("slow");
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
		console.log("male", $('#radio-male:checked').val());
		console.log("femal", $('#radio-female:checked').val());
		if ($('#radio-male:checked').val()) {
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

				$('#bmr-result').show("slow");
				$('#bmr-value-result').text(response.bmr.toFixed(2));
				$('#tdee-value-result').text(response.tdee.toFixed(2));
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
				$('#chol-result').show("slow");
				switch(response.ldl_level){
					case 0 :
						$("#ldl-text-result").text("Very Good");
						break;
					case 1:
						$("#ldl-text-result").text("Good");
						break;
					case 2:
						$("#ldl-text-result").text("Poor");
						break;
					case 3:
						$("#ldl-text-result").text("Bad");
						break;
					case 4:
						$("#ldl-text-result").text("Very Bad");
						break;
				}

				switch(response.hdl_level){
					case 0:
						$("#hdl-text-result").text("Good");
						break;
					case 1:
						$("#hdl-text-result").text("Risk for heart disease");
						break;
					case 2:
						$("#hdl-text-result").text("High risk for heart disease");
						break;
				}

				switch(response.tri_level){
					case 0:
						$("#tri-text-result").text("Good");
						break;
					case 1:
						$("#tri-text-result").text("A little high");
						break;
					case 2:
						$("#tri-text-result").text("High");
						break;
					case 3:
						$("#tri-text-result").text("Very high");
						break;
				}

				$("#chol-value-result").text(response.chol);

				switch(response.chol_level){
					case 0:
						$("#chol-text-result").text("Good");
						break;
					case 1:
						$("#chol-text-result").text("Rather high");
						break;
					case 2:
						$("#chol-text-result").text("High");
						break;
				}
			}
		})
	});
}