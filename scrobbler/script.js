let songText = document.getElementById("song");
let urlParams = new URLSearchParams(window.location.search);

var requestOptions = {
  method: "GET",
  redirect: "follow"
};

let lastSong = null;

const getSong = (requestOptions) => {
  const url = "http://ws.audioscrobbler.com/2.0/";
  return new Promise((resolve, reject) => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?api_key=${urlParams.get(
        "key"
      )}&user=${urlParams.get(
        "user"
      )}&format=json&method=user.getrecenttracks&limit=1`,
      requestOptions
    )
      .then(async (resp) => {
        let details = await resp.json();
        details = details["recenttracks"]["track"][0];
        if (details["@attr"] && details["@attr"].nowplaying) {
          let song = {
            name: details["name"],
            artist: details["artist"]["#text"]
          };
          resolve(song);
        } else {
          reject("Not listening to anything");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.error == 6) {
          reject("Check your api key or username in the .env file");
        } else {
          reject(err.response.data.message);
        }
      });
  });
};

let lastValid = true;

setInterval(() => {
  getSong(requestOptions)
    .then((song) => {
      if (JSON.stringify(song) == JSON.stringify(lastSong)) {
        return;
      }
      lastSong = song;
      console.log(song);
      songText.innerHTML = `<< ${song.name} | ${song.artist} >>  `;
      lastValid = true;
    })
    .catch((err) => {
      if (lastValid) {
        songText.innerHTML = err;
        lastValid = false;
      }
    });
}, 4000);
