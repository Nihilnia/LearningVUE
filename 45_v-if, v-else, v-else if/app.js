const app = Vue.createApp({
  data() {
    return { goals: [], newGoal: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.newGoal);
      console.log(this.goals);
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
