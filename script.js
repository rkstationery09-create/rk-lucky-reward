function getOffer(){

let amount = Number(document.getElementById("amount").value);
let result = document.getElementById("result");

if(!amount || amount < 50){
result.innerHTML = "❌ Minimum ₹50 required";
return;
}

let offers = [];

/* 🎯 ALL OFFERS MIXED (RANDOM SYSTEM) */
if(amount >= 50 && amount < 100){
offers = [
"🎁 ₹5 Pen",
"🎁 ₹5 Eraser",
"🎁 ₹5 Scale",
"🎁 ₹5 Sharpener",
"🎁 ₹5 Pencil",
"🎁 ₹5 Glue Stick"
];
}

else if(amount >= 100 && amount < 200){
offers = [
"🎁 ₹10 Pen",
"🎁 ₹10 Sketch Color",
"🎁 ₹10 Wax Crayon",
"🎁 ₹10 Pencil",
"🎁 ₹10 Eraser Pen",
"🎁 ₹10 Scale",
"🎁 ₹10 Fevistick"
];
}

else if(amount >= 200 && amount < 300){
offers = [
"🎁 ₹20 Sketch Color",
"🎁 ₹20 Wax Color",
"🎁 ₹20 Pencil",
"🎁 ₹20 Pocket Diary",
"🎁 ₹20 Fevistick"
];
}

else if(amount >= 300){
offers = [
"🎁 ₹30 Sketch Color",
"🎁 ₹30 Wax Color",
"🎁 ₹30 White Marker",
"🎁 ₹30 Fevistick",
"🎁 ₹30 Clay",
"🎁 ₹30 Water Color"
];
}

/* 🔥 PURE RANDOM PICK */
let randomIndex = Math.floor(Math.random() * offers.length);
let randomOffer = offers[randomIndex];

result.innerHTML =
"💰 Bill ₹" + amount + " → " + randomOffer;
}
