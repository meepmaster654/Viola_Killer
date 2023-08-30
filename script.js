let moneys = 0; //sets money to 0
let mpc = 1; //sets mps to 1
function clicked() {
  moneys += mpc; //adds money per click to money
   moneys = Math.round(10*moneys)/10; //rounds money to the nearest 10th
  document.getElementById("moneyYouHave").innerHTML = moneys; // displays how much money you have
  document.getElementById("viola").src = "data:image/jpeg;base64,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";
};
function fixViola(){ //return viola to fixed image
  document.getElementById("viola").src="data:image/jpeg;base64,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"
};
function unclick(){
  setTimeout(fixViola,500)
};

setInterval(moneyPerSecond, 100) //runs money per second every .1 secodns
let mps = 0;//sets money per second to 0
function moneyPerSecond(){
  moneys += mps/10;//adds 1/10 of money per second to your money
  moneys = Math.round(10*moneys)/10; //rounds money to nerest 10th
  document.getElementById("moneyYouHave").innerHTML = moneys; // displays how much money you have
};

//Set variables for upgrade1
let upgrade1Cost = 100;
let upgrade1mpc = 1;
let upgrade1Amount = 0;

//upgrade1 funcition
function upgrade1() { 
  //makes sure that upgrade is affordable and is not maxed out
  if (moneys >= upgrade1Cost && upgrade1Amount < 10) {
    //adds more to your money per click(mpc)
    mpc += upgrade1mpc;
    upgrade1mpc *= 1.2;
    //subtracts money from total
    moneys -= upgrade1Cost;
    upgrade1Cost *= 1.5;
    //shows that you got the upgrade
    upgrade1Amount += 1;
    //round all of your money
    moneys = Math.round(100*moneys)/100;
    upgrade1Cost = Math.round(10*upgrade1Cost)/10;
    upgrade1mpc = Math.round(10*upgrade1mpc)/10;
    mpc = Math.round(10*mpc)/10;
    //max multipliar
    if (upgrade1Amount == 10) {
      mpc *= 2;
    };
    //update the HTML
    document.getElementById("upgrade1Cost").innerHTML = upgrade1Cost;
    document.getElementById("moneyYouHave").innerHTML = moneys;
    document.getElementById("upgrade1mpc").innerHTML = upgrade1mpc;
    document.getElementById("mpc").innerHTML = mpc;
    document.getElementById("upgrade1Amount").innerHTML = upgrade1Amount;
  };
};

//sets upgrade 2 variables
let upgrade2Cost = 100;
let upgrade2mps = 1;
let upgrade2Amount = 0;

//upgrade 2 function
function upgrade2() {
  //makes sure you can afford the upgrade and that it is not maxed
  if (moneys >= upgrade2Cost && upgrade2Amount < 10) {
    //subtracts cost from your money & multiplys the cost
    moneys -= upgrade2Cost;
    upgrade2Cost *= 1.5
    //add the upgrade to your money per second
    mps += upgrade2mps;
    upgrade2mps *= 1.4;
    upgrade2Amount += 1;
    upgrade2mps = Math.round(10*upgrade2mps)/10;
    moneys = Math.round(100*moneys)/100;
    mps = Math.round(10*mps)/10;
    if (upgrade2Amount == 10) {
      mps *= 2;
    };
    document.getElementById("upgrade2Cost").innerHTML = upgrade2Cost;
    document.getElementById("moneyYouHave").innerHTML = moneys;
    document.getElementById("mps").innerHTML = mps;
    document.getElementById("upgrade2mps").innerHTML = upgrade2mps;
    document.getElementById("upgrade2Amount").innerHTML = upgrade2Amount;
  };
};

let upgrade1lvl2Cost = 10,000;
let upgrade1lvl2Amount = 0;

function upgrade1lvl2() {
  if (moneys >= upgrade1lvl2Cost && upgrade1lvl2Amount < 10 && upgade1Amount >= 10) {
    mpc *= 1.5;
    upgrade1lvl2Cost *= 1.3;
    moneys -= upgrade1lvl2Cost;
    upgrade1lvl2Amount += 1;
    if (upgrade1lvl2Amount == 10) {
      mps *=3;
    };
    document.getElementById("upgrade1lvl2Cost").innerHTML = upgrade1Cost;
    document.getElementById("moneyYouHave").innerHTML = moneys;
    document.getElementById("mpc").innerHTML = mpc;
    document.getElementById("upgrade1lvl2Amount").innerHTML = upgrade1lvl2Amount;
  };
};
