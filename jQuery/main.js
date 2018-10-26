var cap_ans=0;
	var lock_cnfPasswd=1;


function captchaFunction(){
	var items = ['+','-','*','/'];

	$('#oprt').html(items[Math.floor(Math.random()*items.length)]);
	$('#num1').html(Math.floor((Math.random() * 89) + 10));
	$('#num2').html(Math.floor((Math.random() * 89) + 10));
	
	cap_ans = eval($('#num1').html()+$('#oprt').html()+$('#num2').html());
	// console.log(cap_ans);
	// console.log(Math.floor(cap_ans));
	// console.log(cap_ans<0);
	if((cap_ans != Math.floor(cap_ans)) || (cap_ans<0)){
		captchaFunction();
		}
	}
$(function(){
	//--variables for captcha function
		captchaFunction();
	
	// --Error Message Variables
	var usernameErrorMsg=$("#usernameErrorMsg");
	var emailErrorMsg=$("#emailErrorMsg");
	var passwordErrorMsg=$("#passwordErrorMsg");
	var captchaErrorMsg=$("#captchaErrorMsg");
	var cnfpasswordErrorMsg=$("#cnfpasswordErrorMsg");
	var genderErrorMsg=$("#genderErrorMsg");
	var phonenoErrorMsg=$("#phonenoErrorMsg");
	var addressErrorMsg=$("#addressErrorMsg");
	var zipErrorMsg=$("#zipErrorMsg");
	var zipErrorMsg2=$("#zipErrorMsg2");
	var pecountryErrorMsg=$("#pecountryErrorMsg");
	var pestateErrorMsg=$("#pestateErrorMsg");
	var pecityErrorMsg=$("#pecityErrorMsg");
	var prcountryErrorMsg=$("#prcountryErrorMsg");
	var prstateErrorMsg=$("#prstateErrorMsg");
	var prcityErrorMsg=$("#prcityErrorMsg");

	usernameErrorMsg.hide();
	emailErrorMsg.hide();
	passwordErrorMsg.hide();
	captchaErrorMsg.hide();
	cnfpasswordErrorMsg.hide();
	genderErrorMsg.hide();
	phonenoErrorMsg.hide();
	addressErrorMsg.hide();
	zipErrorMsg.hide();
	zipErrorMsg2.hide();
	pecountryErrorMsg.hide();
	pestateErrorMsg.hide();
	pecityErrorMsg.hide();
	prcountryErrorMsg.hide();
	prstateErrorMsg.hide();
	prcityErrorMsg.hide();
	
	
	// --variables for input fields
	var confirmpassword = $("#confirmpassword");
	var username = $("#username");
	var pecountry = $("#pecountry");
	var prcountry = $("#prcountry");
	var pestate = $("#pestate");
	var prstate = $("#prstate");
	var pecity = $("#pecity");
	var prcity = $("#prcity");
	var email=$("#email");
	var password = $("#password");
	var captcha = $("#capInput");
	var gender =$("#gender");
	var phonenumber=$("#phonenumber");
	var pezip=$("#zip");
	var przip =$("#zip2");
	
	
	confirmpassword.prop('disabled', true);
	
	// --error check variables
	var error_username = false;
	var error_password = false;
	var error_cnfpassword = false;
	var error_email=false;
	var error_captcha = false;
	var error_address = false;
	var error_gender= false;
	var error_phoneno = false;
	var error_address = false;
	var error_zip = false;
	var error_zip2 = false;
	var error_pecountry=false;
	var error_pecity=false;
	var error_pestate=false;
	var error_prcountry=false;
	var error_prstate=false;
	var error_prcity=false;
	
	//--captcha function
	
	
	//--validation functions
	function check_country(input,emessage,errorindex){
		if(input.val() == 'select'){
			emessage.html("Select Your Country");
			emessage.show();
			errorindex=true;
		}
		else{
				errorindex=false;
				emessage.hide();
		}
	}
	
	
	function check_state(input,emessage,errorindex){
		if(input.val() == 'select'){
			emessage.html("Select Your State");
			emessage.show();
			errorindex=true;
		}
		else{
				errorindex=false;
				emessage.hide();
		}
	}
	
	function check_city(input,emessage,errorindex){
		if(input.val() == 'select'){
			emessage.html("Select Your City");
			emessage.show();
			errorindex=true;
		}
		else{
				errorindex=false;
				emessage.hide();
		}
	}
	
	function check_zip(input,emessage,errorindex){
		var reg = /^[0-9]+$/;
			if ( input.val().trim().length == 5 && reg.test(input.val())) {
				errorindex=false;
				emessage.hide();
		}
		else {
			emessage.html("Invalid Zip");
				emessage.show();
				errorindex=true;
		}
		}
		
	function check_username(){	
		var username_length = $('#username').val().trim().length;
		if(username_length < 5 || username_length>20){
			usernameErrorMsg.html("Invalid User Name");
			usernameErrorMsg.show();
			error_username=true;
		}
		else{
			error_username=false;
			usernameErrorMsg.hide();
		}
	}

	function check_phonenumber(){	
		var phonenumber = $('#phonenumber').val();
		var pattern = new RegExp(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/);
		if(!pattern.test(phonenumber)){
			phonenoErrorMsg.html("Invalid Phone Number");
			phonenoErrorMsg.show();
			error_phoneno=true;
		}
		else{
			error_phoneno=false;
			phonenoErrorMsg.hide();
		}
	}
	
	function check_email(){	
		var email_value = $('#email').val();
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    
		if(!pattern.test(email_value)){
			emailErrorMsg.html("Invalid Email");
			emailErrorMsg.show();
			error_email=true;
		}
		else{
			error_email=false;
			emailErrorMsg.hide();
		}
	
	}
	
	function check_password(){	
		// at least one number, one lowercase and one uppercase letter
		// at least six characters
		var password_value = $('#password').val();
		var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    
		if(!pattern.test(password_value)){
			passwordErrorMsg.html("Invalid Password");
			passwordErrorMsg.show();
			error_password=true;
			lock_cnfPasswd=1;
			confirmpassword.val('');
			confirmpassword.prop('disabled', true);
		}
		else{
			error_password=false;
			lock_cnfPasswd=0;
			confirmpassword.prop('disabled', false);
			passwordErrorMsg.hide();
		}
	}
	
	function check_cnfpassword(){	
		if(lock_cnfPasswd===0){
			
		var cnfpassword_value = confirmpassword.val();
		var pattern = $('#password').val();
    
		if(cnfpassword_value!=pattern){
			cnfpasswordErrorMsg.html("confirm password not matching");
			cnfpasswordErrorMsg.show();
			error_cnfpassword=true;
		}
		else{
			error_cnfpassword=false;
			cnfpasswordErrorMsg.hide();
		}
		
		}
		else{
			confirmpassword.prop('disabled', true);
		}
	}

	function check_captcha(){
		var input = $('#capInput').val();
		if(cap_ans != parseInt(input))
		{
			captchaErrorMsg.html("Invalid captcha entered");
			captchaErrorMsg.show();
				error_captcha= true;
		} else {
			error_captcha= false;
			captchaErrorMsg.hide();
		}
	}	
	
	function check_gender(){
			if (!$("input[name='optradio']:checked").val()) {
			genderErrorMsg.html("Please Select your gender");
			genderErrorMsg.show();
			}
			else {
			error_gender= false;
			genderErrorMsg.hide();
			}
	}
	

	//--validation function calls
	
	username.focusout(function(){
		check_username();
	});	
	pecountry.focusout(function(){
		check_country(pecountry,pecountryErrorMsg,error_pecountry);
	});
	prcountry.focusout(function(){
		check_country(prcountry,prcountryErrorMsg,error_prcountry);
	});
	pestate.focusout(function(){
		check_state(pestate,pestateErrorMsg,error_pestate);
	});
	prstate.focusout(function(){
		check_state(prstate,prstateErrorMsg,error_prstate);
	});
	pecity.focusout(function(){
		check_city(pecity,pecityErrorMsg,error_pecity);
	});
	prcity.focusout(function(){
		check_city(prcity,prcityErrorMsg,error_prcity);
	});
	email.focusout(function(){
		check_email();
	});
	password.focusout(function(){
		check_password();
	});
	confirmpassword.focusout(function(){
		check_cnfpassword();
	});
	captcha.focusout(function(){
		check_captcha();
	});
	gender.focusout(function(){
		check_gender();
	});
	phonenumber.focusout(function(){
		check_phonenumber();
	});
	pezip.focusout(function(){
		check_zip(pezip,zipErrorMsg,error_zip);
	});
	przip.focusout(function(){
		check_zip(przip,zipErrorMsg2,error_zip2);
	});
	
	$("#myform").submit(function(){
		check_username();
		check_email();
		check_captcha();
		check_password();
		check_cnfpassword();
		check_gender();
		check_phonenumber();
		check_country(pecountry,pecountryErrorMsg,error_pecountry);
		check_country(prcountry,prcountryErrorMsg,error_prcountry);
		check_state(pestate,pestateErrorMsg,error_pestate);
		check_state(prstate,prstateErrorMsg,error_prstate);
		check_city(pecity,pecityErrorMsg,error_pecity);
		check_city(prcity,prcityErrorMsg,error_prcity);
		check_zip(pezip,zipErrorMsg,error_zip);
		check_zip(przip,zipErrorMsg2,error_zip2);
		
		if(error_prcity==false && error_pecity==false && error_prstate==false && error_pestate==false 
		&& error_prcountry==false && error_pecountry==false && error_zip==false && error_zip2==false && error_phoneno==false 
		&& error_username==false && error_captcha==false && error_email==false && error_password==false && error_cnfpassword==false 
		&& error_address==false && error_gender==false){
			return true;
		} else {
			return false;
		}
	});
});





