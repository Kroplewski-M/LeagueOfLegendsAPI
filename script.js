import axios from "axios";

const riot_key = "RGAPI-bdacdafb-a31a-466d-bf68-116534bbfeac";

function searchForPlayer(summonerName) {
  const APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riot_key}`;
  axios
    .get(APICallString)
    .then(function (response) {
      //SUCCESS
      console.log(response);
    })
    .catch(function (error) {
      //ERROR
      console.log(error);
    });
}

searchForPlayer("M4T789");
