const App = Vue.createApp({
  data() {
    return {
      questionOne: "",
      isTogglePara: false,
      bgColorData: "",
    };
  },
  methods: {
    getUserData(event) {
      this.questionOne = event.target.value;
    },
    togglePara() {
      this.isTogglePara = !this.isTogglePara;
    },
    bgColor(event) {
      this.bgColorData = event.target.value;
    },
  },
  computed: {
    questionOneStyle() {
      if (this.questionOne === "user1") {
        return { user1: true };
      } else if (this.questionOne === "user2") {
        return { user2: true };
      }
    },
    paraShow() {
      return this.isTogglePara ? "hidden" : "visible";
    },
  },
});

App.mount("#assignment");
