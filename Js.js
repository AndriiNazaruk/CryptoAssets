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
let th=document.createElement("th");
th.style.background="blue";
th.innerText="eee";

