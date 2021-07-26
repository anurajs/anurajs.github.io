let original = new Date("2021-07-16");
let now = new Date();
let difference = now - original;
let day = 1000 * 60 * 60 * 24;
let days = Math.floor(difference / day);
document.getElementById("time").innerHTML = `Days since last dungeon: ${days}`;
