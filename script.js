// Defining the ADA result variables

let ada1 = 0;
let ada500 = 0;
let ada1006 = 0;


// Making the Api request

const req = new XMLHttpRequest();

req.onload = function() {
  console.log("ALL DONE WITH REQUEST!!!");
  console.log(this.response);
  const data = JSON.parse(this.response);
  ada1 = data.ticker.price;
  adaDisplay1.textContent = Math.floor(ada1 * 100) / 100;
  adaDisplay500.textContent = Math.floor((ada1 * 500) * 100) / 100;
  adaDisplay1006.textContent = Math.floor((ada1 * 1157) * 100) / 100;
  adaDisplay102.textContent = Math.floor((ada1 * 102) * 100) / 100;
}

req.onerror = function() {
  console.log("ERROR!!!");
  console.log(this);
}

req.open("GET", "https://api.cryptonator.com/api/ticker/ada-eur");
req.send();


// Printing the result to the page

const adaDisplay1 = document.getElementById("ada1");
const adaDisplay500 = document.getElementById("ada500");
const adaDisplay1006 = document.getElementById("ada1006");
