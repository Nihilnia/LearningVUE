<template>
  <label for="name">Name</label>
  <input type="text" name="name" v-model="name" />
  <label for="phone">Phone</label>
  <input type="text" name="phone" v-model="phone" />
  <label for="email">E-Mail</label>
  <input type="text" name="email" v-model="email" />
  <button @click="sendTheData">Register</button>
</template>

<script>
export default {
  data() {
    return {
      name: ``,
      phone: ``,
      email: ``,
    };
  },
  methods: {
    sendTheData() {
      this.$emit("send-the-data", this.name, this.phone, this.email);
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
  emits: ["send-the-data"],
};
</script>

<style>
#section-add-friend {
  max-width: fit-content;
  margin: auto;
}
</style>
