// Javascript Document

// Functia prompt
var curs = 18;
var lei=prompt('Citi lei doriti sa schimbati in USD?','0');
var dolari=lei/curs;
console.log(lei);
console.log('Puteti obtine '+ dolari + '  USD');
var reducere1=lei/10;
var reducere2=lei/5;

if (lei<1000){
	console.log('Nu dispuneti de reducere');
	}
	else if (lei<=100000){
	console.log('Aveti reducere de 10%, ce corespunde cu '+reducere1+' lei');	
	}
	else {
		console.log('Aveti reducere de 20%, ce corespunde cu'+reducere2+' lei');
	}