	
function CustomValidation(input) {
	this.invalidities = [];
	this.validityChecks = [];

	//add reference to the input node
	this.inputNode = input;

	//trigger method to attach the listener
	this.registerListener();
}
CustomValidation.prototype = {
	addInvalidity: function(message) {
		this.invalidities.push(message);
	},
	getInvalidities: function() {
		return this.invalidities.join('. \n');
	},
	checkValidity: function(input) {
		for ( var i = 0; i < this.validityChecks.length; i++ ) {

			var isInvalid = this.validityChecks[i].isInvalid(input);
			if (isInvalid) {
				this.addInvalidity(this.validityChecks[i].invalidityMessage);
			}

			var requirementElement = this.validityChecks[i].element;

			if (requirementElement) {
				if (isInvalid) {
					requirementElement.classList.add('invalid');
					requirementElement.classList.remove('valid');
				} else {
					requirementElement.classList.remove('invalid');
					requirementElement.classList.add('valid');
				}

			} // end if requirementElement
		} // end for
	},
	checkInput: function() { // checkInput now encapsulated

		this.inputNode.CustomValidation.invalidities = [];
		this.checkValidity(this.inputNode);

		if ( this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '' ) {
			this.inputNode.setCustomValidity('');
		} else {
			var message = this.inputNode.CustomValidation.getInvalidities();
			this.inputNode.setCustomValidity(message);
		}
	},
	registerListener: function() { //register the listener here

		var CustomValidation = this;

		this.inputNode.addEventListener('keyup', function() {
			CustomValidation.checkInput();
		});


	}

};



/* ----------------------------

	Validity Checks

	The arrays of validity checks for each input
	Comprised of three things
		1. isInvalid() - the function to determine if the input fulfills a particular requirement
		2. invalidityMessage - the error message to display if the field is invalid
		3. element - The element that states the requirement

---------------------------- */

var usernameValidityChecks = [
	{
		isInvalid: function(input) {
			return input.value.length < 3;
		},
		invalidityMessage: 'This input needs to be at least 3 characters',
		element: document.querySelector('label[for="username"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
			var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
			return illegalCharacters ? true : false;
		},
		invalidityMessage: 'Only letters and numbers are allowed',
		element: document.querySelector('label[for="username"] .input-requirements li:nth-child(2)')
	}
];

var passwordValidityChecks = [
	{
		isInvalid: function(input) {
			return input.value.length < 8 | input.value.length > 100;
		},
		invalidityMessage: 'This input needs to be between 8 and 100 characters',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[0-9]/g);
		},
		invalidityMessage: 'At least 1 number is required',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(2)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[a-z]/g);
		},
		invalidityMessage: 'At least 1 lowercase letter is required',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(3)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[A-Z]/g);
		},
		invalidityMessage: 'At least 1 uppercase letter is required',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(4)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
		},
		invalidityMessage: 'You need one of the required special characters',
		element: document.querySelector('label[for="password"] .input-requirements li:nth-child(5)')
	}
];

var emailValidityChecks = [
	{
		isInvalid: function(input) {
			return input.value.indexOf('@')<=0;
		},
		invalidityMessage: '@ is placed at incorrect position',
		element: document.querySelector('label[for="email"] .input-requirements li:nth-child(1)')
	},
	{
		
		isInvalid: function(input) {
			 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
			  {
				return (false);
			  }
				return (true);
		},
		invalidityMessage: 'missing "." or incorrect position',
		element: document.querySelector('label[for="email"] .input-requirements li:nth-child(2)')
	}
	
];

var phoneValidityChecks = [
	{
		isInvalid: function(input) {
			if(input.value.length!=10 && input.value.length!=0)
			{return (true);}
			return (false);
		},
		invalidityMessage: 'Phone number length should be 10',
		element: document.querySelector('label[for="phonenumber"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
			return isNaN(input.value);
		},
		invalidityMessage: 'Phone number must only contain digits',
		element: document.querySelector('label[for="phonenumber"] .input-requirements li:nth-child(2)')
	}
];

var city1ValidityChecks = [
	{
		isInvalid: function(input) {
			if(input.value.length==0)
			{return (true);}
			return (false);
		},
		invalidityMessage: 'Please enter details',
		element: document.querySelector('label[for="city1"] .input-requirements li:nth-child(1)')
	}
];

var state1ValidityChecks = [
	{
		isInvalid: function(input) {
			if(input.value.length==0)
			{return (true);}
			return (false);
		},
		invalidityMessage: 'Please enter details',
		element: document.querySelector('label[for="state1"] .input-requirements li:nth-child(1)')
	}
];

var city2ValidityChecks = [
	{
		isInvalid: function(input) {
			if(input.value.length==0)
			{return (true);}
			return (false);
		},
		invalidityMessage: 'Please enter details',
		element: document.querySelector('label[for="city2"] .input-requirements li:nth-child(1)')
	}
];

var state2ValidityChecks = [
	{
		isInvalid: function(input) {
			if(input.value.length==0)
			{return (true);}
			return (false);
		},
		invalidityMessage: 'Please enter details',
		element: document.querySelector('label[for="state2"] .input-requirements li:nth-child(1)')
	}
];

var zip1ValidityChecks = [
	{
		isInvalid: function(input) {
			if(input.value.length!=4)
			{return (true);}
			return (false);
		},
		invalidityMessage: 'Invalid zip code',
		element: document.querySelector('label[for="zip1"] .input-requirements li:nth-child(1)')
	}
];

var zip2ValidityChecks = [
	{
		isInvalid: function(input) {
			if(input.value.length!=4)
			{return (true);}
			return (false);
		},
		invalidityMessage: 'Invalid zip code',
		element: document.querySelector('label[for="zip2"] .input-requirements li:nth-child(1)')
	}
];



var captchaValidityChecks = [
	{
		isInvalid: function(input) {
			
			return captchacheck(input.value);
		},
		invalidityMessage: 'wrong captcha answer',
		element: document.querySelector('label[for="capInput"] .input-requirements li:nth-child(1)')
	}
];

/* ----------------------------

	Setup CustomValidation

	Setup the CustomValidation prototype for each input
	Also sets which array of validity checks to use for that input

---------------------------- */


var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phonenumber');
var captchaInput = document.getElementById('capInput');
var cityInput = document.getElementById('pecity');
var stateInput = document.getElementById('pestate');
var zipInput = document.getElementById('zip1');
var cityInput2 = document.getElementById('prcity');
var stateInput2 = document.getElementById('prstate');
var zipInput2 = document.getElementById('zip2');

usernameInput.CustomValidation = new CustomValidation(usernameInput);
usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

passwordInput.CustomValidation = new CustomValidation(passwordInput);
passwordInput.CustomValidation.validityChecks = passwordValidityChecks;


emailInput.CustomValidation = new CustomValidation(emailInput);
emailInput.CustomValidation.validityChecks = emailValidityChecks;

phoneInput.CustomValidation = new CustomValidation(phoneInput);
phoneInput.CustomValidation.validityChecks = phoneValidityChecks;

captchaInput.CustomValidation = new CustomValidation(captchaInput);
captchaInput.CustomValidation.validityChecks = captchaValidityChecks;

cityInput.CustomValidation = new CustomValidation(cityInput);
cityInput.CustomValidation.validityChecks = city1ValidityChecks;

stateInput.CustomValidation = new CustomValidation(stateInput);
stateInput.CustomValidation.validityChecks = state1ValidityChecks;

cityInput2.CustomValidation = new CustomValidation(cityInput2);
cityInput2.CustomValidation.validityChecks = city2ValidityChecks;

stateInput2.CustomValidation = new CustomValidation(stateInput2);
stateInput2.CustomValidation.validityChecks = state2ValidityChecks;

zipInput.CustomValidation = new CustomValidation(zipInput);
zipInput.CustomValidation.validityChecks = zip1ValidityChecks;

zipInput2.CustomValidation = new CustomValidation(zipInput2);
zipInput2.CustomValidation.validityChecks = zip2ValidityChecks;


/* ----------------------------

	Event Listeners

---------------------------- */

var inputs = document.querySelectorAll('input.sethis');


var submit = document.querySelector('input[type="submit"');
var form = document.getElementById('myform');

function validate() {
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].CustomValidation.checkInput();
	}
}

submit.addEventListener('click', validate);
form.addEventListener('submit', validate);
	/* ----------------------------

	captcha functions

---------------------------- */
	
	var v=0;
	
	window.document.onload =  myFunction();	
	function myFunction(){
		var items = ['+','-','*','/'];
		var o =document.getElementById("oprt");
		o.innerHTML = items[Math.floor(Math.random()*items.length)]
		x = document.getElementById("num1")
		x.innerHTML = Math.floor((Math.random() * 89) + 10);
		
		y = document.getElementById("num2")
		y.innerHTML = Math.floor((Math.random() * 89) + 10);
		v = eval(document.getElementById("num1").innerHTML+document.getElementById("oprt").innerHTML+document.getElementById("num2").innerHTML);
		console.log(v);
		console.log(Math.floor(v));
		console.log(v<0);
		if((v != Math.floor(v)) || (v<0)){
			myFunction();
			}
		}
	function captchacheck(input){
			
				if(v != parseInt(input))
				{
					
					return true;
				}
				return false;
		}	
	
