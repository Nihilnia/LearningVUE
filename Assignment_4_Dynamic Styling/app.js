const App = Vue.createApp({
  data() {
    return {
      userInput: "",
      togglePara: false,
    };
  },
  methods: {
    getUserInput(event) {
      this.userInput = event.target.value;
    },
    toggleP() {
      this.togglePara = !this.togglePara;
    },
  },
  computed: {
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
