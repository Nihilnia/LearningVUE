const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    name(lastVal) {
      console.log("Name changed, new value: " + lastVal);
      this.fullName = lastVal + " " + this.lastName;
    },
    lastName(lastVal) {
      console.log("Last name changed, new value: " + lastVal);
      this.fullName = this.name + " " + lastVal;
    },
    counter(newVal, oldVal) {
      console.log(
        "Counter changed, new value: " + newVal + " Old value: " + oldVal
      );
      if (newVal >= 50) {
        let that = this;
        this.counter = "Updating!";
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    computedFullName() {
      return `${this.name} ${this.lastName}`;
    },
    computedCounter() {
      console.log("Current counter");
      console.log(this.counter);
      if (this.counter > 50) {
        return (this.counter = 0);
      }
      return this.counter;
    },
  },
  methods: {
    setFullName() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "ABC";
    },
    setName(event) {
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
      this.lastName = "";
    },
  },
});

app.mount("#events");
