<template>
  <li>
    <h2 v-if="isFavFriend">{{ name }} {{ isFavFriend ? "(Fav)" : "" }}</h2>
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
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAdress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      isFavFriend: this.isFavorite === "1" ? true : false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      this.isFavFriend = !this.isFavFriend;
    },
  },
};
</script>
