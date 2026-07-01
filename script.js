function getOffer(){

let amount = document.getElementById("amount").value;

if(amount < 100){
  document.getElementById("result").innerHTML = "❌ Minimum ₹100 required";
  return;
}

let discount = amount / 10;

document.getElementById("result").innerHTML =
"🎁 You got ₹" + discount + " OFF";
}
