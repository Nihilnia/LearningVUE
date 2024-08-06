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

let dummy = "Dummy";

const data = {
  message: `Hello!`,
  longMessage: `Hello!!` + dummy, // Hello!! Dummy
};

dummy = "not dummy ";

console.log("#######################");

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.message = value + "  World!!";
    } else if (key === `longMessage`) {
      target.longMessage = value + " Breeze!";
    }
  },
};

const proxy = new Proxy(data, handler);

// Setting the properties through the proxy
proxy.message = proxy.message; // This will trigger the handler
proxy.longMessage = proxy.longMessage; // This will trigger the handler

console.log(proxy.message);
console.log(proxy.longMessage);
