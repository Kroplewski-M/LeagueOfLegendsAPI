const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Summoner Account",
      summonerID: " ",
    };
  },
}).mount("#app");

const riot_key = "RGAPI-bdacdafb-a31a-466d-bf68-116534bbfeac";

function searchForPlayer(summonerName) {
  const APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riot_key}`;

  fetch(APICallString)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
      console.log(data.summonerLevel);
      console.log(data);
    })
    .catch((error) => console.log(error));
}

searchForPlayer("JacketsAreWarm");
