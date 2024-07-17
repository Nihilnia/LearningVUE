const app = Vue.createApp({
  data() {
    return {
      goalFirstWord: "Learn",
      goalLastWord: "Asap",
      names: ["V", "U", "E"],
      randomLetter: "",
      tryDaObj: {
        name: "Nihil",
        occupation: "Developer",
      },
      vueLink: "https://vuejs.org/",
      linkTarget: "_blank",
    };
  },
  methods: {
    selectRandomLetter() {
      console.log("selectRandomLetter");

      if (Math.random() > 0.5) {
        return this.goalFirstWord;
      } else {
        return this.goalLastWord;
      }
    },
  },
  mounted() {
    this.selectRandomLetter();
  },
});

app.mount("#user-goal");
