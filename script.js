function getOffer(){

let amount = Number(document.getElementById("amount").value);
let result = document.getElementById("result");

if(!amount || amount < 50){
result.innerHTML = "❌ Minimum ₹50 required";
return;
}

let offers = [];

if(amount >= 50 && amount < 100){
offers = ["🎁 ₹5 Pen","🎁 ₹5 Pencil","🎁 ₹5 Eraser","🎁 ₹5 Sharpener","🎁 ₹5 Scale"];
}
else if(amount >= 100 && amount < 200){
offers = ["🎁 ₹10 Pen","🎁 ₹10 Sketch Color","🎁 ₹10 Pencil","🎁 ₹10 Fevistick"];
}
else if(amount >= 200 && amount < 300){
offers = ["🎁 ₹20 Diary","🎁 ₹20 Color Set","🎁 ₹20 Kit"];
}
else{
offers = ["🎁 ₹30 Gift","🎁 🎉 Surprise Box","🎁 ₹30 Premium Kit"];
}

let random = Math.floor(Math.random() * offers.length);

result.innerHTML = "💰 ₹" + amount + " → " + offers[random];
}
