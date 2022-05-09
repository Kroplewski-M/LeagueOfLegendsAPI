//import axios from "axios";

const riot_key = "RGAPI-bdacdafb-a31a-466d-bf68-116534bbfeac";

function searchForPlayer(summonerName) {
  const APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riot_key}`;

  fetch(APICallString)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

searchForPlayer("M4T789");
