var englishNumber = function (number){
var list = {A1:"one", A2:"two", A3:"three", A4:"four", A5: "five", A6: 'six', A7:'seven', A8: 'eight',
	A9:'nine', B1:'ten', B2:'twenty', B3:'thirty', B4:'forty', B5:'fifty', B6:'sixty', B7:'seventy', B8: "eighty",
	B9:'ninety', C1:'eleven', C2:'twelve', C3:'thirteen', C4:'fourteen', C5:'fifteen', C6:'sixteen', C7:'seventeen',
	C8:'eighteen', C9:'nineteen', D:"one hundred"}
if (isNaN(number)){
	return "try again";
}else if (number>9999){
	return "try again";
}else if (number===0){
	return "zero";
}else if (number===10){
	return "ten";
}else if (number<10) {
	return ones(number);
}else if (number >= 1000){
	return thousands(number);
}else if (number >= 100){
	return hundreds(number);
}else if (number < 100 && number >= 20){
	return tens(number);
}else if (number>10 && number<20){
	return teens(number);
}else return "try again";
};//englishNumber

var thousands = function (number){
	
	if (number / 1000 >= 1){
	var	a = number / 1000;
	//console.log(a);
	var	b = Math.floor(a);
	//console.log(b);
	var	c = Math.round((a - b)*1000);
	//console.log(ones(b) + " thousand " + hundreds(c) + teens(c) + tens(c) + ones(c));
	
		return ones(b) + " thousand " + hundreds(c) + teens(c) + tens(c) + ones(c);

	};
};

var hundreds = function (number){
	
	if (number / 100 >= 1){
	var	a = number / 100;
	//console.log(a);
	var	b = Math.floor(a);
	//console.log(b);
	var	c = Math.round((a - b)*100);
	//console.log(c);
		//  call tens on c. call ones on b.
		//console.log(ones(b) + " hundred " + tens(c) + teens(c) + ones(c));
		//console.log(teens(c));
		return ones(b) + " hundred " + tens(c) + teens(c) + ones(c);

	};
};
var ones = function (number){
	var list = {A1:"one", A2:"two", A3:"three", A4:"four", A5: "five", A6: 'six', A7:'seven', A8: 'eight',
	A9:'nine', B1:'ten', B2:'twenty', B3:'thirty', B4:'forty', B5:'fifty', B6:'sixty', B7:'seventy', B8: "eighty",
	B9:'ninety', C1:'eleven', C2:'twelve', C3:'thirteen', C4:'fourteen', C5:'fifteen', C6:'sixteen', C7:'seventeen',
	C8:'eighteen', C9:'nineteen', D:"one hundred"}
	var x = number;
	if (x === 9){
	return list.A9;
}else if (x===8){
	return list.A8;
}else if (x===7){
	return list.A7;
}else if (x===6){
	return list.A6;
}else if (x===5){
	return list.A5;
}else if (x===4){
	return list.A4;
}else if (x===3){
	return list.A3;
}else if (x===2){
	return list.A2;
}else if (x===1){
	return list.A1;
}else {return ""};
};

var tens = function(number){
	var list = {A1:"one", A2:"two", A3:"three", A4:"four", A5: "five", A6: 'six', A7:'seven', A8: 'eight',
	A9:'nine', B1:'ten', B2:'twenty ', B3:'thirty ', B4:'forty ', B5:'fifty ', B6:'sixty ', B7:'seventy ', B8: "eighty ",
	B9:'ninety ', C1:'eleven', C2:'twelve', C3:'thirteen', C4:'fourteen', C5:'fifteen', C6:'sixteen', C7:'seventeen',
	C8:'eighteen', C9:'nineteen', D:"one hundred"}

	var a = number / 10;
	//console.log(a);
	var	b = Math.floor(a);
	//console.log(b);
	var	c = Math.round((a - b)*10);
	//console.log(c);
	if (a>1 && a<2){
		return"";
	}else if (b === 1){
	return list.B1;
}else if (b === 9){
	return list.B9 + ones(c);
}else if (b===8){
	return list.B8 + ones(c);
}else if (b===7){
	return list.B7 + ones(c);
}else if (b===6){
	return list.B6 + ones(c);
}else if (b===5){
	return list.B5 + ones(c);
}else if (b===4){
	return list.B4 + ones(c);
}else if (b===3){
	return list.B3 + ones(c);
}else if (b===2){
	return list.B2 + ones(c);
}else if (b===1){
	return list.B1 + ones(c);
	}else return "";
	
	};//end tens

var teens = function(number){
var list = {A1:"one", A2:"two", A3:"three", A4:"four", A5: "five", A6: 'six', A7:'seven', A8: 'eight',
	A9:'nine', B1:'ten', B2:'twenty', B3:'thirty', B4:'forty', B5:'fifty', B6:'sixty', B7:'seventy', B8: "eighty",
	B9:'ninety', C1:'eleven', C2:'twelve', C3:'thirteen', C4:'fourteen', C5:'fifteen', C6:'sixteen', C7:'seventeen',
	C8:'eighteen', C9:'nineteen', D:"one hundred"}
	
	if (number === 19){
	return list.C9;
}else if (number===18){
	return list.C8;
}else if (number===17){
	return list.C7;
}else if (number===16){
	return list.C6;
}else if (number===15){
	return list.C5;
}else if (number===14){
	return list.C4;
}else if (number===13){
	return list.C3;
}else if (number===12){
	return list.C2;
}else if (number===11){
	return list.C1;
}else return "";
};

$(document).ready(function(){
	$("form#eng").submit(function(event){
		var input = parseInt($("input#engNum").val());
		var result = englishNumber(input);
		$("div#result p").text(result);
		event.preventDefault();
	});
});


