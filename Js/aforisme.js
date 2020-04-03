// Javascript Document

// Masive

var a = ['0','1','2','3','4','5','6','7','8','9'];
//console.log(a.length);
a[0]='Nimic nu poate servi mai bine la aprecierea unui om ca faptele sale.'
a[1]='Prima limbă pe care trebuie s-o învețe un educator e limba copilului.'
a[2]='Menirea profesorilor – a-i învata pe copii să învete fără profesori.'
a[3]='3'
a[4]='4'
a[5]='5'
a[6]='6'
a[7]='7'
a[8]='8'
a[9]='9'
a[10]='10'


var b = Math.round(Math.random()*10);
//console.log(a.length);

//Varianta 1

/*
if (b<=3)
{
	alert(a[0]);
}
else if (b>=7)
{
	alert(a[1]);
}
else 
{
	alert(a[2]);
	
	}
*/

//Varianta 2

switch (b){
	
	case 0:
		alert(a[0]);
		break;
	case 1:
		alert(a[1]);
		break;
	case 2:
		alert(a[2]);
		break;
	case 3:
		alert(a[3]);
		break;
	case 4:
		alert(a[4]);
		break;
	case 5:
		alert(a[5]);
		break;
	case 6:
		alert(a[6]);
		break;
	case 7:
		alert(a[7]);
		break;
	case 8:
		alert(a[8]);
		break;
	case 9:
		alert(a[9]);
		break;
	case 10:
		alert(a[10]);
		break;
	default:
		alert('Nu cunosc asa aforisme!');
}

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
