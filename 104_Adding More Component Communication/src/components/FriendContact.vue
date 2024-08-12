<template>
  <li>
    <h2 v-if="isFavorite">
      {{ name }} {{ id }} {{ isFavorite ? "(Fav)" : "" }}
      <span @click="$emit('remove-friend', id)">X</span>
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFav">Change</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAdress }}
      </li>
      <button v-if="isDestroy" @click="destroyEverything">Destroy All</button>
      <li>
        <input
          type="password"
          @keypress.enter="letItBe($event)"
          v-model="fatalPassword"
          v-if="destroyChoice"
        />
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAdress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDestroy: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["toggle-fav-friend", "remove-friend"],
  // emits: {
  //   "toggle-fav-friend": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("How dare you forgot the ID!?");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      destroyChoice: false,
      fatalPassword: "",
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      this.$emit("toggle-fav-friend", this.id);
    },
    destroyEverything() {
      this.destroyChoice = true;
    },
    letItBe(e) {
      if (this.fatalPassword == "1234") {
        document.querySelector("html").remove();
      } else {
        alert(`Wrong mf.`);
        e.target.value = ``;
      }
    },
    // removeFriend() {
    //   console.log(`clcik`);
    //   this.$emit("remove-friend", this.id);
    // },
  },
};
</script>
