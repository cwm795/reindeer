console.log("hello world!");
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

for  (var i = 0; i < reindeer.length; i += 1) {
	hohohoElement.innerHTML += `<p>${colors[i]} ${reindeer[i]}</p>`;
};