const App = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: "",
      pressCount: 0,
    };
  },
  methods: {
    add(f) {
      this.counter += f;
    },
    remove(f) {
      this.counter -= f;
    },
    reset() {
      this.counter = 0;
      this.userName = "";
      document.querySelector("#abc").value = "";
    },
    getUserName(event, lastName) {
      this.userName = ` ${event.target.value} ${lastName}`;
      console.log(event);
      this.pressCount++;
    },
  },
});

App.mount("#events");
