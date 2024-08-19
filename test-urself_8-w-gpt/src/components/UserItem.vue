<template>
  <h3>{{ name }}</h3>
  <h3>{{ id }}</h3>
  <button @click="() => makeItSelected(id)">Select</button>
</template>

<script>
export default {
  props: ["id", "name"],
  data() {
    return {};
  },
  methods: {
    makeItSelected(daID) {
      this.$emit("makeItSelected", daID);
    },
  },
};
</script>
