const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// let msgOne = "Hello";
// let msgTwo = msgOne + " World!";

// console.log(msgTwo);

// msgOne = "aaaaaaaa";

let dummy = "dDDDummy";

const data = {
  message: `Hello!`,
  longMessage: `Hello!!` + dummy,
};

dummy = "NOT DUMMY";

console.log(data.message);
console.log(data.longMessage);

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.message = value + "World!!";
    } else if (key === `longMessage`) {
      target.longMessage = value + "Breeze!";
    }
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "AAAABCCC";
proxy.longMessage = "ASHDFJGHDJF";

console.log(proxy.message);
console.log(proxy.longMessage);
