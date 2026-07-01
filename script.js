function getOffer(){

let amount = Number(document.getElementById("amount").value);
let result = document.getElementById("result");

if(!amount || amount < 50){
result.innerHTML = "❌ Minimum ₹50 required";
return;
}

let offers = [];

if(amount >= 50 && amount < 100){
offers = ["🎁 ₹5 Pen","🎁 ₹5 Eraser","🎁 ₹5 Pencil","🎁 ₹5 Sharpener","🎁 ₹5 Scale","🎁 ₹5 Glue"];
}

else if(amount >= 100 && amount < 200){
offers = ["🎁 ₹10 Pen","🎁 ₹10 Fevicol","🎁 ₹10 Stapler Pin","🎁 ₹15 Sketch Color","🎁 ₹15 Glue Stick","🎁 ₹10 Wax Color","🎁 ₹10 Pencil Color","🎁 ₹10 Water Color","🎁 ₹10 Pen Pencil Combo"];
}

else if(amount >= 200 && amount < 300){
offers = ["🎁 ₹20 Water Color","🎁 ₹25 Fevicol","🎁 ₹20 Pocket Diary","🎁 ₹25 Wax Color","🎁 ₹30 Fevistick","🎁 ₹20 Sharpener","🎁 ₹25 Highlighter"];
}

else if(amount >= 300 && amount < 400){
offers = ["🎁 ₹30 Notebook","🎁 ₹35 Sketch Color","🎁 ₹30 Water Bottle","🎁 ₹30 Water Color","🎁 ₹30 Whitener","🎁 ₹30 Clay","🎁 ₹30 Pouch Box"];
}

else if(amount >= 400 && amount < 500){
offers = ["🎁 ₹48 Natraj Pencil Box","🎁 ₹40 Fevistick","🎁 ₹40 Register Small","🎁 ₹40 Glue Bottle","🎁 🎁 4 Pen Combo"];
}

else{
offers = ["🎁 ₹60 Apsara Pencil Box","🎁 ₹50 Geometry Box","🎁 ₹50 Tiffin Box","🎁 ₹50 Fevistick"];
}

let random = Math.floor(Math.random() * offers.length);

result.innerHTML =
"💰 ₹" + amount + " → " + offers[random];
}
