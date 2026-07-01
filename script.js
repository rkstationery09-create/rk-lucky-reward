function getOffer() {

let amount = Number(document.getElementById("amount").value);
let result = document.getElementById("result");

if (!amount || amount < 50) {
    result.innerHTML = "❌ Minimum ₹50 purchase required.";
    return;
}

let offers = [];

// 💰 50–99
if (amount >= 50 && amount < 100) {
    offers = [
        "🎁 ₹5 Pen",
        "🎁 ₹5 Eraser",
        "🎁 ₹5 Pencil",
        "🎁 ₹5 Sharpener",
        "🎁 ₹5 Scale",
        "🎁 ₹5 Glue"
    ];
}

// 💰 100–199
else if (amount >= 100 && amount < 200) {
    offers = [
        "🎁 ₹10 Pen",
        "🎁 ₹10 Fevicol",
        "🎁 ₹10 Stapler Pin",
        "🎁 ₹15 Sketch Color",
        "🎁 ₹15 Glue Stick",
        "🎁 ₹10 Wax Color",
        "🎁 ₹10 Pencil Color",
        "🎁 ₹10 Water Color",
        "🎁 ₹10 Pen Pencil Combo"
    ];
}

// 💰 200–299
else if (amount >= 200 && amount < 300) {
    offers = [
        "🎁 ₹20 Water Color",
        "🎁 ₹25 Fevicol",
        "🎁 ₹20 Pocket Diary",
        "🎁 ₹25 Wax Color",
        "🎁 ₹30 Fevistick",
        "🎁 ₹20 Rocket Point Sharpener",
        "🎁 ₹25 Highlighter"
    ];
}

// 💰 300–399
else if (amount >= 300 && amount < 400) {
    offers = [
        "🎁 ₹30 Notebook",
        "🎁 ₹35 Sketch Color",
        "🎁 ₹30 Water Bottle",
        "🎁 ₹30 Water Color",
        "🎁 ₹30 Sketch Color",
        "🎁 ₹30 Whitener",
        "🎁 ₹30 Clay",
        "🎁 ₹30 Pouch Box"
    ];
}

// 💰 400–499
else if (amount >= 400 && amount < 500) {
    offers = [
        "🎁 ₹48 Natraj Pencil Box",
        "🎁 ₹40 Fevistick",
        "🎁 ₹40 Register Small",
        "🎁 ₹40 Glue Bottle",
        "🎁 4 Pen Combo"
    ];
}

// 💰 500–599
else if (amount >= 500 && amount <= 599) {
    offers = [
        "🎁 ₹60 Apsara Pencil Box",
        "🎁 ₹50 Geometry Box",
        "🎁 ₹50 Tiffin Box",
        "🎁 ₹50 Fevistick"
    ];
}

// ❌ 600+
else {
    result.innerHTML = "❌ Lucky Offer is available only for bills between ₹50 and ₹599.";
    return;
}

let random = Math.floor(Math.random() * offers.length);

result.innerHTML = "💰 Bill Amount: ₹" + amount + "<br><br>🎉 Congratulations! You Won:<br><span style='font-size:26px;color:#d60000'>" + offers[random] + "</span>";

}
