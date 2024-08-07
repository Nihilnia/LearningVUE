const App = Vue.createApp({
  data() {
    return {
      friendsList: [
        {
          id: "manuel",
          name: "Manue lLorenzaa",
          phone: 123123123,
          eMail: "example@manuel.com",
        },
        {
          id: "julie",
          name: "Julie Jonesaa",
          phone: 4567,
          eMail: "example@julie.com",
        },
      ],
      isShow: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
  },
});

App.mount("#app");
