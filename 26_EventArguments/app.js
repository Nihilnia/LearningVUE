const App = Vue.createApp({
  data() {
    return {
      counter: 0,
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
    },
  },
});

App.mount("#events");
