const app = Vue.createApp({
  data() {
    return { goals: [], newGoal: "" };
  },
  methods: {
    readTheGoal(event) {
      this.newGoal = event.target.value;
      console.log(this.goal);
    },
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
