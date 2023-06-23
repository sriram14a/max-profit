let property = [0, 0, 0]   //initial number of buildings for Theatre,Pub,Comercial parks
let timeUnit = [4, 5, 10]  //time units takes to build the properties

function earnings(n) {
  let pr = 0;              //initialising maximum profit
  let profit = [0, 0, 0]   //initial profits of [T,P,C]
  
  if (n < 4) {             //if time units not enough to build a single property returns 0 earnings
    return 0;
  } 
  
  else {
    let balTime = n - 4;        //finding the balance timeunit after building a property 
    profit[0] = balTime * 1000; //profits after building the property
    if (n >= 5) {
        balTime = n - 5;
      profit[1] = balTime * 1500;
      if (n >= 10) {
        balTime = n - 10;
        profit[2] = balTime * 3000;
      }
    }
  }

  let maxIndex = profit.indexOf(Math.max(...profit)) // finding the index of maximum profit

  //if one or more property returns same maximum profit
  //finding the different properties
  if (maxIndex === 0) {
    if (profit[maxIndex] === profit[1]) {
      console.log("Earnings :", equal1(profit, pr, n));
      console.log(finalProperty());
      property = new Array(3).fill(0);
    }
  }

  if (maxIndex === 1) {
    if (profit[maxIndex] === profit[2]) {
      console.log("Earnings :", equal2(profit, pr, n));
      console.log(finalProperty());
      property = new Array(3).fill(0);
    }
  }


  pr += profit[maxIndex] //The profit 
  property[maxIndex]++;  //increasing number of property value which gives high profit

  return pr + earnings(n - timeUnit[maxIndex]) //cheking whether the balance timeunit is enough to build another property and adding the profits
}

function equal1(profit, pr, n) {
  pr += profit[1];
  property[1]++;
  return pr + earnings(n - timeUnit[1]);
}
function equal2(profit, pr, n) {
  pr += profit[2];
  property[2]++;
  return pr + earnings(n - timeUnit[2]);
}

// the final result
function finalProperty() {
  return `T: ${property[1]} P: ${property[0]} C: ${property[2]}`;
}

console.log("Earnings :", earnings(13));
console.log(finalProperty());