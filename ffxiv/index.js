fetch("https://anurajs.github.io/ffxiv/data.json")
	.then(async (response) => {
		let json = await response.json();
		console.log(json);
		let original = new Date(json.date);
		let now = new Date();
		let difference = now - original;
		let day = 1000 * 60 * 60 * 24;
		let days = Math.floor(difference / day);
		document.getElementById(
			"time"
		).innerHTML = `Days since last dungeon: ${days}`;
		document.title = `${days} Days since last Dungeon`;
	})
	.catch((e) => {
		console.log(e);
	});
