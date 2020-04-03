let money, time;

function start () {
    // prompt se foloseste cand vrei sa iei o valoare de la utilizator
    money = +prompt('Ce buget aveti lunar?','0');
    time = prompt('Introduceti data in format YYYY-MM-DD','YYYY-MM-DD');

    while (isNaN(money) || money =="" || money ==null) {
        money = +prompt('Ce buget aveti lunar?','0');  
    }
}

start();

let appData = {
    buget: money, 
    expenses: {}, 
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooeExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt ('Scieti care este articolul de cheltuieli inevitabile luna aceasta','Gazda'),
                b = prompt ('Cat costa articolul de cheltuieli inevitabile?','1000');
                if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null  && a != '' && b != '' && a.length < 50) {
                
                console.log("done");
                appData.expenses[a] = b;
                } else {
                i = i-1;           
            }       
        }    
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.buget/30).toFixed();
        alert ('Bugetul zilnic este: '+ appData.buget/30+ ' lei.');
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100 ) {
            console.log('Asigurat nivel minimal de trai');
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log('Asigurat nivel mediu de trai');
            } else if (appData.moneyPerDay > 2000) {
                console.log('Asigurat nivel inalt de trai');
            } else {
                console.log('Sa comis o eroare'); 
            }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Ce suma de bani acumulati?"),
                percent =+prompt("Cu ce procent?");
            appData.monthIncome = save/100/12*percent;
            alert("Venitul lunar din depositul dumneavoastra: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt('Articolul de cheltuieli secundare?','');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
let items = prompt('Ce activitati va aduc venit suplimentar? (Enumerati despartind prin virgula)', '');
appData.income = items.split(', ');
appData.income.push(prompt('Scrieti si alte activitati'));
appData.income.sort();

    }
};

  