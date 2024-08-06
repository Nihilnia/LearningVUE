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
      console.log(this.currentUserInput);
    },
    setText() {
      this.message = this.$refs.tryRef.value;
      console.log(this.$refs.tryRef); //element itself
      console.dir(this.$refs.tryRef);
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
