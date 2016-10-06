var main = function() {

	// Used variables
	var input = "";
	var result="";
	var restart = false;
	var clickedButton = "";
	
	// Calculator function 
	var Calculator = function (){
		if (restart == true) {
			if (['+','-','*','/'].indexOf(clickedButton)>=0) {
				result = input + clickedButton;
			}
			input="";
			restart=false;
		} 	

		// Conditions of different clicked buttons

		if (!isNaN(clickedButton)) {		
			if (input.length<11) {
				input += clickedButton;
				if (input[0] == "0"){
					input=input.slice(1);
				}
			}
		};

		if (['+','-','*','/'].indexOf(clickedButton)>=0) {
			if (result=="" && input ==""){
				result = "0" + clickedButton; 
			} else if (result!="" && input =="") {
				result = result.slice(0, -1) +clickedButton;
				input="0";
			} else if (result == "" && input !='') {			 
				result = input+clickedButton;
				input="0";
			}
			else {
				result = eval(result+input)+clickedButton;
				input="0";
			}	
		}

		if (clickedButton == "=") {
			if (input == "" && result !="") {
				input=result.slice(0,-1);
			}
			else {
				input = eval(result+input);
			};

			if (input.toString().length > 11) {
				input = input.toString().slice(0,9);
			}
			result="";
			restart = true;
		}	

		if (clickedButton == "C") {
			input = "0";
			result = "";
		}

		if (clickedButton == "AC") {
			input = "0";
		}

		if (clickedButton == ".") {
			if ((input).indexOf(".")<0 ) {
				input += clickedButton;
			}
		}


		$("#input").html(input);
		$("#result").html(result);
	}
	
	//Conditions for using the keyboard 

 	function PressAKey(e) {
		var key = e.keyCode || e.charCode;
		if (e.which == '13') {
			e.preventDefault();
			clickedButton = "=";	
		} else {
			clickedButton = String.fromCharCode(key);
		}
		clickedButton = clickedButton.replace(/\s/g, '');
		Calculator();
	}
	
	
	window.addEventListener("keypress", PressAKey, false);
	
// Clicking the buttons on screen
	
	$("button").click(function() {
		clickedButton = $(this).val();
		Calculator();
	})
		
}		

$(document).ready(main)