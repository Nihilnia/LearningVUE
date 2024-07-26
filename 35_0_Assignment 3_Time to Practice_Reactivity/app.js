const App = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addNumber(val) {
      this.number += val;
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet!";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      console.log("watcher is running");
      let that = this;
      setTimeout(() => {
        that.number = 0;
      }, 2000);
    },
  },
});

App.mount("#assignment");
