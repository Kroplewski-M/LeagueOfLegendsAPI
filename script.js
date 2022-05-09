const { createApp } = Vue;

createApp({
  data() {
    return {
      riot_key: "RGAPI-bdacdafb-a31a-466d-bf68-116534bbfeac",
      title: "Summoner Account",
      summonerID: " ",
      server: " ",
    };
  },
  methods: {
    searchForPlayer: function () {
      const APICallString = `https://${this.server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.summonerID}?api_key=${this.riot_key}`;

      fetch(APICallString)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.name);
          console.log(data.summonerLevel);
          console.log(data);
        })
        .catch((error) => console.log(error));
    },
  },
}).mount("#app");
