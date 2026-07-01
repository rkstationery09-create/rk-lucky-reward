function getOffer(){

let amount = Number(document.getElementById("amount").value);
let result = document.getElementById("result");

if(!amount || amount < 50){
result.innerHTML = "❌ Minimum ₹50 required";
return;
}

let offers = [];

if(amount >= 50 && amount < 100){
offers = ["🎁 ₹5 Pen","🎁 ₹5 Eraser","🎁 ₹5 Scale","🎁 ₹5 Pencil","🎁 ₹5 Sharpener"];
}
else if(amount >= 100 && amount < 200){
offers = ["🎁 ₹10 Pen","🎁 ₹10 Pencil","🎁 ₹10 Sketch Color","🎁 ₹10 Eraser"];
}
else if(amount >= 200 && amount < 300){
offers = ["🎁 ₹20 Diary","🎁 ₹20 Color Set","🎁 ₹20 Fevistick"];
}
else{
offers = ["🎁 ₹30 Gift","🎁 🎉 Surprise Box","🎁 ₹30 Color Kit"];
}

let random = Math.floor(Math.random() * offers.length);

result.innerHTML = "💰 ₹" + amount + " → " + offers[random];
}
