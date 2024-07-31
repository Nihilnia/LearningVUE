const App = Vue.createApp({
  data() {
    return {
      userInput: "",
      togglePara: false,
    };
  },
  methods: {
    getUserInput(event) {
      console.log((this.userInput = event.target.value));
      this.userInput = event.target.value;
    },
    toggleP() {
      this.togglePara = !this.togglePara;
    },
  },
  computed: {
    daUserInput() {
      console.log("daUserInput");
      return this.userInput;
    },
    paraClasses() {
      if (this.togglePara) {
        return { hidden: this.togglePara };
      } else {
        return { visible: !this.togglePara };
      }
    },
  },
});

App.mount("#assignment");
