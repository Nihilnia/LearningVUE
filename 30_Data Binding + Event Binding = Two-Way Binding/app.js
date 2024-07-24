const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      nameTwo: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    confirmInput() {
      this.name = `${this.name} (Confirmed)`;
    },
  },
});

app.mount("#events");
