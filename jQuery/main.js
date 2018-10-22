var v=0;
var count=0;
function myFunction(){
	var items = ['+','-','*','/'];

	$('#oprt').html(items[Math.floor(Math.random()*items.length)]);
	$('#num1').html(Math.floor((Math.random() * 89) + 10));
	$('#num2').html(Math.floor((Math.random() * 89) + 10));
	
	v = eval($('#num1').html()+$('#oprt').html()+$('#num2').html());
	console.log(v);
	console.log(Math.floor(v));
	console.log(v<0);
	if((v != Math.floor(v)) || (v<0)){
		myFunction();
		}
	}
$(window).bind("load", function() {
	myFunction();
});


$(function(){
	$("#usernameErrorMsg").hide();
	$("#emailErrorMsg").hide();
	$("#passwordErrorMsg").hide();
	$("#captchaErrorMsg").hide();
	$("#cnfpasswordErrorMsg").hide();
	$("#genderErrorMsg").hide();
	$("#phonenoErrorMsg").hide();
	$("#addressErrorMsg").hide();
	var error_username = false;
	var error_password = false;
	var error_cnfpassword = false;
	var error_email=false;
	var error_captcha = false;
	var error_address = false;
	var error_gender= false;
	var error_phoneno = false;
	var error_address = false;
	
	$("#username").focusout(function(){
		check_username();
	});
	
	$("#address").focusout(function(){
		check_address();
	});
	
	$("#email").focusout(function(){
		check_email();
	});

	$("#password").focusout(function(){
		check_password();
	});
	
	$("#confirmpassword").focusout(function(){
		check_cnfpassword();
	});
	
	$("#capInput").focusout(function(){
		check_captcha();
	});
	
	$("#gender").focusout(function(){
		check_gender();
	});
	
	$("#phonenumber").focusout(function(){
		check_phonenumber();
	});
	
	function check_address() {
		$('.loopAdd').each(function() {
    if ( $(this).val() !== '' ) {
			error_address=false;
			$("#addressErrorMsg").hide();
    }
    else {
		$("#addressErrorMsg").html("All Address Fields are not filled");
			$("#addressErrorMsg").show();
			error_address=true;
    }
  });
}
	
	function check_username(){	
		var username_length = $('#username').val().length;
		if(username_length < 5 || username_length>20){
			$("#usernameErrorMsg").html("Should be between 5 - 20 characters");
			$("#usernameErrorMsg").show();
			error_username=true;
		}
		else{
			error_username=false;
			$("#usernameErrorMsg").hide();
		}
	}

	function check_phonenumber(){	
		var phonenumber = $('#phonenumber').val();
		if(phonenumber.length!=10 || !$.isNumeric(phonenumber)){
			$("#phonenoErrorMsg").html("Should be numeric of length 10");
			$("#phonenoErrorMsg").show();
			error_phoneno=true;
		}
		else{
			error_phoneno=false;
			$("#phonenoErrorMsg").hide();
		}
	}
	
	function check_email(){	
		var email_value = $('#email').val();
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    
		if(!pattern.test(email_value)){
			$("#emailErrorMsg").html("Invalid Email");
			$("#emailErrorMsg").show();
			error_email=true;
		}
		else{
			error_email=false;
			$("#emailErrorMsg").hide();
		}
	
	}
	function check_password(){	
		// at least one number, one lowercase and one uppercase letter
		// at least six characters
		var password_value = $('#password').val();
		var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    
		if(!pattern.test(password_value)){
			$("#passwordErrorMsg").html("Invalid Password");
			$("#passwordErrorMsg").show();
			error_password=true;
		}
		else{
			error_password=false;
			$("#passwordErrorMsg").hide();
		}
	}
	function check_cnfpassword(){	
		var cnfpassword_value = $('#confirmpassword').val();
		var pattern = $('#password').val();
    
		if(cnfpassword_value!=pattern){
			$("#cnfpasswordErrorMsg").html("confirm password not matching");
			$("#cnfpasswordErrorMsg").show();
			error_cnfpassword=true;
		}
		else{
			error_cnfpassword=false;
			$("#cnfpasswordErrorMsg").hide();
		}
	}

	function check_captcha(){
		var input = $('#capInput').val();
		if(v != parseInt(input))
		{
			$("#captchaErrorMsg").html("Invalid captcha entered");
			$("#captchaErrorMsg").show();
				error_captcha= true;
		} else {
			error_captcha= false;
			$("#captchaErrorMsg").hide();
		}
	}	
	
	function check_gender(){
			if (!$("input[name='optradio']:checked").val()) {
			$("#genderErrorMsg").html("Please Select your gender");
			$("#genderErrorMsg").show();
			}
			else {
			error_gender= false;
			$("#genderErrorMsg").hide();
			}
	}
	

		$("#myform").submit(function(){
			error_username = false;
			error_captcha = false;
			error_email=false;
			error_password=false;
			error_cnfpassword=false;
			error_address=false;
			error_gender = false;
			error_phoneno=false;
			error_address=false;
			check_username();
			check_email();
			check_captcha();
			check_password();
			check_cnfpassword();
			check_gender();
			check_phonenumber();
			check_address();
			if(error_address==false && error_phoneno==false && error_username==false && error_captcha==false && error_email==false && error_password==false && error_cnfpassword==false && error_address==false && error_gender==false){
				return true;
			} else {
				return false;
			}
		});
});

//-----------------------------------




