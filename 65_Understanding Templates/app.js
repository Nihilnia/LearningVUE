const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

const Gloria = Vue.createApp({
  data() {
    return {
      Nihil: "Nia",
    };
  },
  template: `
  <h3>{{Nihil}}</h3>`,
});

Gloria.mount("#Gloria");
