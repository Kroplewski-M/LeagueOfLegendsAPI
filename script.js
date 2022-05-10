let app = Vue.createApp({
  data() {
    return {
      riot_key: "RGAPI-f6d3f0d8-c420-47ce-9eda-71885ddc4414",
      title: "Summoner Account",
      summonerID: "",
      server: "",
      iconID: "",
      //DISPLAYED VALUES
      summonerName: "",
      summonerLevel: "",
      summonerIcon: "",
    };
  },
  methods: {
    searchForPlayer: function () {
      const APICallString = `https://${this.server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.summonerID}?api_key=${this.riot_key}`;

      fetch(APICallString)
        .then((response) => response.json())
        .then((data) => {
          this.iconID = data.profileIconId;
          this.summonerName = data.name;
          this.summonerLevel = data.summonerLevel;
          this.summonerIcon = `https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${this.iconID}.png`;
        })
        .catch((error) => console.log(error));
    },
  },
});
app.component("summoner-details", {
  template: `
    <div id='info'>
    <h1 id="name">{{name}}</h1>
    <img id="icon" height='100' width='100' :src="summonericon" alt='icon'/>
    <p id="level">Level : {{level}}</p>
    </div>
    `,
  props: ["name", "level", "summonericon"],
}),
  app.mount("#app");
