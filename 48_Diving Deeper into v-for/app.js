const app = Vue.createApp({
  data() {
    return {
      goals: ["Vue it", "Nihil"],
      newGoal: "",
      exObject: {
        title: "Vue it",
        rating: 5,
      },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.newGoal);
      console.log(this.goals);
      this.newGoal = "";
    },
    goalsLength() {
      console.log(this.goals.length);
      return this.goals.length === 0 ? true : false;
    },
  },
  computed: {
    allGoals() {
      return this.goals;
    },
  },
});

app.mount("#user-goals");

// let exArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 112];

// for (f in exArray) {
//   console.log(f);
// }
