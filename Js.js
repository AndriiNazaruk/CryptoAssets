let Names = [];
Names.push('')

LoadCurrency(Names);
async function GetAllCurrency() {
    let url = 'https://poloniex.com/public?command=returnCurrencies';
    let response = await fetch(url);
    let currencies = await response.json(); // читаем ответ в формате JSON
    return currencies;
}


function deleteCurrency(id){
    console.log('Delete ' + id);
    exceptNames.push(id);
    LoadCurrency(exceptNames);
}

async function LoadCurrency(ID) {
    let currency = await GetAllCurrency();
    let table = document.getElementById('Table');
    table.innerHTML = '';
    let number = 1;
    start:for (let a in currency) {
        if (currency[a] instanceof Object) {
        for(let i=0;i<ID.length;i++){
                if(currency[a].id == ID[i]){
                    continue start;
                }
            }
            let tr = document.createElement('tr');

            let th = document.createElement('th');
            th.scope = 'row';
            th.innerHTML = number;
            tr.appendChild(th);

            let td = document.createElement('td'); 
            td.innerHTML = a;
            tr.appendChild(td);

            td = document.createElement('td'); 
            td.innerHTML = currency[a].name;
            td.classList.add('name');
            tr.appendChild(td);

            td = document.createElement('td'); 
            td.innerHTML = currency[a].humanType;
            tr.appendChild(td);
          
            td = document.createElement('td'); 
            td.innerHTML = currency[a].currencyType;
            tr.appendChild(td);

            td = document.createElement('td'); 
            td.innerHTML = currency[a].txFee;
            tr.appendChild(td);

            td = document.createElement('td'); 
            td.innerHTML = currency[a].minConf;
            tr.appendChild(td);

            td = document.createElement('td'); 
            let btn = document.createElement('button');
            btn.id = currency[a].id;
            btn.innerHTML = 'DELETE';
            btn.type = 'button';
            btn.classList.add('btn');
            btn.classList.add('btn-primary');
            btn.classList.add('btn-md');      
            btn.addEventListener('click',function(){
                deleteCurrency(currency[a].id)});
            td.appendChild(btn);
            tr.appendChild(td);

            table.appendChild(tr);
            number++;
        }
    }
}

async function GetAllCurrency() {
    let url = 'https://poloniex.com/public?command=returnCurrencies';
    let response = await fetch(url);
    let currency = await response.json(); // читаем ответ в формате JSON
    return currency;
}


function deleteCurrency(id){
   
    Names.push(id);
    LoadCurrency(Names);
}