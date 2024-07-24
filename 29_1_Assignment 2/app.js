const App = Vue.createApp({
  data() {
    return {
      userName: ``,
      confirmedUserName: ``,
    };
  },
  methods: {
    showAlert() {
      if (this.userName === ``) {
        alert(`Hello world!`);
      } else {
        alert(`Hello ${this.userName}!`);
      }
    },
    registerUser(event) {
      this.userName = event.target.value;
    },
    confirmUser(event) {
      this.confirmedUserName = this.userName;
    },
  },
});

App.mount(`#assignment`);
