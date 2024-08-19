<template>
  <h2>Name of the product:{{ name }}</h2>
  <h3>Price of the product:{{ price }}</h3>
  <h4>description of the product:{{ description }}</h4>
  <button @click="() => selectItem(id)">Select this item</button>
</template>

<script>
export default {
  props: ["id", "name", "price", "description"],
  data() {
    return {};
  },
  methods: {
    selectItem(id) {
      console.log("asdasd1");
      this.$emit("selected-item", id);
    },
  },
};
</script>
