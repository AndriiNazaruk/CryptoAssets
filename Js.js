async function getJson(){

let URL="https://poloniex.com/public?command=returnCurrencies";
let response=await fetch(URL);
let read=await response.json();
for(let k in read) {
    if(read[k] instanceof Object) {
        console.log(read[k].name);
    }
}
}

let tr=document.getElementById("tbody");
tr.appendChild("tr");
tr.innerText("Roro");
let tr=document.createElement("tr");


let th=document.createElement("th");

tr.appendChild("th");


