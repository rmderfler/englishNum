var englishNumber = function (number){
var list = {A1:"one", A2:"two", A3:"three", A4:"four", A5: "five", A6: 'six', A7:'seven', A8: 'eight',
	A9:'nine', B1:'ten', B2:'twenty', B3:'thirty', B4:'forty', B5:'fifty', B6:'sixty', B7:'seventy', B8: "eighty",
	B9:'ninety', C1:'eleven', C2:'twelve', C3:'thirteen', C4:'fourteen', C5:'fifteen', C6:'sixteen', C7:'seventeen',
	C8:'eighteen', C9:'nineteen', D:"one hundred"}
if (number === 100){
	
	return list.D;
}



}//englishNumber

var hundreds = function (number){
	
	if (number / 100 >= 1){
	var	a = number / 100;
	console.log(a);
	var	b = Math.floor(a);
	console.log(b);
	var	c = Math.ceil((a - b)*100);
	console.log(c);
		//  call tens on c. call ones on b.
		console.log(ones(b) + " hundred " +tens(c));
		return ones(b) + " hundred " + tens(c);

	}
}
var ones = function (number){
	var list = {A2:'two'}
	var a = number / 1;
	if (a !== 0){
		if (a === 1) { return "one";
	}else if (a === 2){
		return list.A2;
	}else if (a===0){return""}
	}
}

var tens = function(number){
	var list = {B2:'twenty '};
	var a = number / 10;
	var	b = Math.floor(a);
	var	c = Math.floor((a - b)*10);
	console.log(c);
	if (b===2){
		console.log(ones(c));
		return list.B2 + ones(c); 
	}else return "";
	
	}


