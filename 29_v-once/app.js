const App = Vue.createApp({
  data() {
    return {
      counter: 10,
      userName: "",
      pressCount: 0,
      showPressCount: 0,
      showUserName: ``,
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
      this.pressCount++;
      this.userName = ` ${event.target.value} ${lastName}`;
    },
    submitForm() {
      alert("Submitted");
    },
    confirmToShow(e) {
      this.showPressCount = this.pressCount;
      this.showUserName = this.userName;
    },
  },
});

App.mount("#events");
