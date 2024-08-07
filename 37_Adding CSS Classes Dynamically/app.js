const Gloria = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      boxDSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      console.log(box);
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      } else if (box === "D") {
        this.boxDSelected = !this.boxDSelected;
      }
    },
  },
});

Gloria.mount("#styling");
