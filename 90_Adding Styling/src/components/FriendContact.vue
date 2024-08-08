<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ isDetailsVisible ? "Hide Details" : "Show Details" }}
    </button>
    <ul v-if="isDetailsVisible">
      <li>{{ friend.phone }}</li>
      <li>{{ friend.eMail }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        id: "friendOne",
        name: "Gloria",
        phone: "123123",
        eMail: "example@Gloria.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
};
</script>
