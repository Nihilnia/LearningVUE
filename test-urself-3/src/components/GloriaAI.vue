<template>
  <section id="Gloria">
    <h2>{{ headTitle }}</h2>
    <p>{{ selfExplanatory }}</p>
    <input type="text" v-model="newIntel" />
    <button @click="changeSelfExpA">Change</button>
  </section>
</template>

<script>
export default {
  props: ["headTitle", "selfExplanatory"],
  data() {
    return {
      newIntel: "",
    };
  },
  methods: {
    changeSelfExpA() {
      console.log("asd");
      this.$emit("change-self-exp", this.newIntel);
    },
  },
};
</script>
