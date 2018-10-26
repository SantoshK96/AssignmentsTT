var countrySelect;
var stateSelect;
var citySelect;
var country;
var state;
var city;

$.getJSON("countryStateCity.json",function(myJson){

	country=myJson.Countries;
	countrySelect+="<option value='select'>-Select Country-</option>";
	$.each(country,function(key,value){
		countrySelect+="<option value='"+value.CountryName+"'>"+value.CountryName+"</option>";
	});
	$("#pecountry").html(countrySelect);
	$("#prcountry").html(countrySelect);
});

$("#pecountry").change(function(){
	stateSelect='';
	$.each(country,function(key,value){
		if(value.CountryName==$("#pecountry").val()){
			state=value.States;
			stateSelect+="<option value='select'>--Select State--</option>";
			$.each(state,function(key,value){
				stateSelect+="<option value='"+value.StateName+"'>"+value.StateName+"</option>";
			});
		}
	});
	$("#pestate").html(stateSelect);
});
	
$("#pestate").change(function(){
	citySelect='';
	$.each(state,function(key,value){
		if(value.StateName==$("#pestate").val()){
			city=value.Cities;
			if(city.length!=0){
				citySelect+="<option value='select'>--Select City--</option>";
			}
			$.each(city,function(key,value){
				citySelect+="<option value='"+value+"'>"+value+"</option>";
			});
			
		}
		
	});
	$("#pecity").html(citySelect);
});
	
$("#prcountry").change(function(){
	stateSelect='';
	$.each(country,function(key,value){
		if(value.CountryName==$("#prcountry").val()){
			state=value.States;
			stateSelect+="<option value='select'>--Select State--</option>";
			$.each(state,function(key,value){
				stateSelect+="<option value='"+value.StateName+"'>"+value.StateName+"</option>";
			});
		}
	});
	$("#prstate").html(stateSelect);
});
	
$("#prstate").change(function(){
	citySelect='';
	$.each(state,function(key,value){
		if(value.StateName==$("#prstate").val()){
			city=value.Cities;
			if(city.length!=0){
				citySelect+="<option value='select'>--Select City--</option>";
			}
			$.each(city,function(key,value){
				citySelect+="<option value='"+value+"'>"+value+"</option>";
			});
			
		}
		
	});
	$("#prcity").html(citySelect);
});
