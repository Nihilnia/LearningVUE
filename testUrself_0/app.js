const App = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      surname: "",
    };
  },
  methods: {
    add(val) {
      this.counter += val;
    },
    subTract(val) {
      this.counter -= val;
    },
    reset() {
      this.counter = 0;
    },
  },
  computed: {
    cFullName() {
      return `${this.name} ${this.surname}`;
    },
  },
  watch: {
    counter(newVal, oldVal) {
      if (newVal >= 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
});

App.mount("#events");
