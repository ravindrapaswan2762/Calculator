var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

for(i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		var value = this.getAttribute('data-value');

		
		if (value == '=') {
			var result = eval(display.innerText);
			display.innerText = result;
		}
		else if(value == 'AC'){
			display.innerText = "";
		}
		else if(value == 'sign'){
			if(display.innerText.charAt(0)=='-'){
				display.innerText = display.innerText.substring(1);
			}
			else{
				display.innerText = "-"+display.innerText;
			}
		}
		else{
			display.innerText += value;
		}
		
	})


}

document.addEventListener('keydown', function(e){
	var x = (e.keyCode) - 96;

	
   if(Number.isInteger(x) && x>=0 && x<=9){
		display.innerText += (e.keyCode - 96);
	}
	else if(Number.isInteger(x) && x==11){
		display.innerText += '+';
	}
	else if(Number.isInteger(x) && x==10){
		display.innerText += '*';
	}
	else if(Number.isInteger(x) && x==15){
		display.innerText += '/';
	}
	else if(Number.isInteger(x) && x== -43){
		display.innerText += '%';
	}
	else if(Number.isInteger(x) && x== -83){
		var result = eval(display.innerText);
		display.innerText = result;
	}

		
})
