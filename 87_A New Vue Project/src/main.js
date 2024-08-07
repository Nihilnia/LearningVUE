import { createApp } from "vue";

createApp({
  data() {
    return {
      abc: "abc",
    };
  },
  mounted() {
    console.log(this.abc);
  },
}).mount("#app");
