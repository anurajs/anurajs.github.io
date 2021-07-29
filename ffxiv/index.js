let original = new Date(
	"Thu Jul 29 2021 01:42:14 GMT+0100 (British Summer Time)"
);
let now = new Date();
let difference = now - original;
let day = 1000 * 60 * 60 * 24;
let days = Math.floor(difference / day);
document.getElementById("time").innerHTML = `Days since last dungeon: ${days}`;
document.title = `${days} Days since last Dungeon`;
