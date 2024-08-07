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
  beforeCreate() {
    console.log(`Before create`);
  },
  created() {
    console.log(`Created`);
  },
  beforeMount() {
    console.log(`Before mounted`);
  },
  mounted() {
    console.log(`Mounted`);
  },
  beforeUpdate() {
    console.log("Before update");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("Before unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 5555);

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
