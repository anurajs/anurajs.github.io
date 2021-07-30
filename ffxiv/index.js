let original = new Date(
	"Fri Jul 30 2021 20:22:27 GMT+0100 (British Summer Time)"
);
let now = new Date();
let difference = now - original;
let day = 1000 * 60 * 60 * 24;
let days = Math.floor(difference / day);
document.getElementById("time").innerHTML = `Days since last dungeon: ${days}`;
document.title = `${days} Days since last Dungeon`;
