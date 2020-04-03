//JavaScript Document
/*Codul Javascript se executa de sus in jos
Declararea variabilelor in Javascript*/


	var number1=5;
	var number2=17;
	
	var data1 = 0.1;
	
// Pentru afisarea rezultatelor in consola brauser se utilizeaza comanda console.log()	
	  console.log(number1+number2);
	  console.log((number1+number2)*data1);
	  console.log((number1+number2)/data1);
	  console.log(number1+number2-number2);
	  

/* Tipuri de date in Javascript: string(text), number(numar), boolean(logic:true, false), object(masive si alte obiecte);
Pentru determinarea tipului de date se foloseste comanda: typeof() */
	console.log(typeof(1));
	console.log(typeof('1'));
  console.log(typeof(data1));
  console.log(typeof(true));
  console.log(typeof([]));
  
  
// Crearea masivelor in Javascript
    var a = [[0.4,'b','c'],'2',3,'comedie'];
	a[1]='data'
  console.log(a);
  
// Masive asociative in Javascript
  var person = [];
  person["firstName"]="John";
  person["lastName"]="Doe";
   console.log(person);
   
//Determinarea lungimii masivului
   console.log(a.length);
   
//Ciclul for pentru vizitarea tuturor elementelor masivului
   var a = ['1','2','3'];
   for(i=0; i<a.length; i++){
   a[i]=a[i]+"data";
   }
   console.log(a);
   
//Operatii de lucru cu textul in Javascript: lipirea textelor, lipirea textului si numarului 
   var text1='rindul1';
   var text2='rindul2';
   var i=99865654;
   
   console.log(text1+text2);
   console.log(typeof(1+text2));
   console.log('text text '+ i +' Cotinuare text');
   console.log('Operatii matematice');
   console.log(6+2);
   console.log(6-2);
   console.log(6*2);
   console.log((6/2+3/4-4/5)*10);
//Operatii matematice de baza in Javascript (se poate de scris direct in consola brauzer): rotungirea numerelor intregi, generarea numerelor
   console.log('Rotungirea');
   console.log(Math.round(10/3));
   
   
//Operatorul conditional if-else si else-if 
      console.log('Constructia IF-ELSE');
	  	  
	  if(5<7)
		  {
		console.log('True');  
			}
					   			
	else{
				   console.log('False');
	}
				   
				   console.log('Constructia ELSE-IF');
	  if(7<7)
		  {
		console.log('False');  
			}
			else if (7==7) {
				   console.log('AAAAAAA');
				   			
			}
			else{
				   console.log('Else if');
		
			}

// Constructia IF-ELSE si ELSE-IF
			console.log('Constructia SWITCH-CASE');
		
			var a=3;
			
			switch (a) {
				
				case 1:
					console.log('Combinatia de actiuni pentru cazul 1');
					break;
				case 2:
					console.log('Combinatia de actiuni pentru cazul 2');
					break;
				case 3:
					console.log('Combinatia de actiuni pentru cazul 3');
					break;
				default:
					console.log('Eu nu cunosc astfel de valori');
					
			}
			
			
			
// Crearea obiectelor in Javascript
// Sunt cateva metode de creare a obiectelor in Javascript
// Varianta 1
var obj=new Object({'first':1});
console.log(obj.first);


// Varianta 2 Este mai compacta
var obj={'first':2};
console.log(typeof(obj.first));

// Proprietatile intr-un obiect se despart prin virgula
var obj={
	'name':'Vasya',
	'lastname':'Pupkin'
	};
	
// Apelul la aceste proprietati
   console.log(obj.name);
   console.log(obj.lastname);
// Adaugarea unei metode in obiect
var obj={
	'name':'Vasya',
	'lastname':'Pupkin',
	'sayHi':function(){
		alert('Hellow');
		}
};
// Apelul la aceasta metoda
//obj.sayHi();

// Inscrierea unei proprietati a obiectului
obj.name="Fedya";
// Verificarea inscrierii
console.log(obj.name)

// Declararea functiei

function test(){
	console.log('Actiunea 1');
	console.log('Actiunea 2');
	console.log('Actiunea 3');
	
}

// Apel la functia test de mai sus 
test()
// Functii incorporate Javascript
//  Functia alert
alert('Fiti atenti la drum');

// Functia confirm
var name=confirm('Cu siguranta actionati?');
console.log(name);

// Functia prompt

var name=prompt('Cum va numiti?','Prietene');
console.log('Hellow '+name+'! Am un mesaj important pentru tine!');

// Cicluri in Javascript
// Ciclul for in Javascript

for (var i=0; i<5; i=i+1) {
	console.log(i);
	}
	
// Ciclurile While si do while

var i=0;
while(i<5){
	console.log(i);
	i++;
	}
	
var k=0;
do{
	console.log(k);
	k++;
	}
while(k<5)
	

// Exemplu cum poti cadea in ciclu infinit si cum poti iesi din elementFromPoint
/*var i=0;
while(i===0){
	console.log(i);
	//i++;
	}
*/






   
   