var money = prompt('Ce buget aveti lunar?','0');
console.log(money);
var timeData = prompt('Introduceti data in format YYYY-MM-DD','YYYY-MM-DD');
console.log(timeData);
var A1 = prompt ('Scieti care este articolul de cheltuieli inevitabile luna aceasta','Gazda');
var valA1 = prompt ('Cat costa articolul de cheltuieli inevitabile?','1000');
var expenses = {A1,valA1};
console.log(A1);
console.log(valA1);
var optionalExpenses = {};
var income = [];
var appData = {buget: 'money', 
            timeData: 'timeData', 
            cheltuieli1: 'expenses', 
            cheltuieli2: 'optionalExpenses', 
            venitSuplim: 'income',
            savings: false};
var bugetZilnic = money/30;
console.log('bugetul zilnic este: '+ bugetZilnic + ' lei.');
alert ('bugetul zilnic este: '+ bugetZilnic + ' lei.');
