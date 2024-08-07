const app = Vue.createApp({
  data() {
    return { goals: [], newGoal: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.newGoal);
      console.log(this.goals);
    },
  },
  computed: {
    allGoals() {
      return this.goals;
    },
  },
});

app.mount("#user-goals");
