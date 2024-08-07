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

App.component("try-component", {
  data() {
    return {
      isShow: false,
      person: {
        name: "Gloria Nia",
        phone: "00112233",
        eMail: "un@known.com",
      },
    };
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
  },
  template: `
  <li>
    <h2>{{person.name}}</h2>
          <button @click="toggleShow">
            {{isShow ? "Hide": "Show"}} Details
          </button>
          <ul v-if="isShow">
            <li><strong>Phone:</strong> {{person.phone}}</li>
            <li><strong>Email:</strong> {{person.eMail}}</li>
          </ul>
        </li>
  `,
});

App.mount("#app");
