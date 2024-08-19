<template>
  <h2>Current Selected:</h2>
  <div v-if="currentProduct != null">
    <h2>Name of the product:{{ currentProduct.name }}</h2>
    <h3>Price of the product:{{ currentProduct.price }}</h3>
    <h4>description of the product:{{ currentProduct.description }}</h4>
  </div>

  <hr />
</template>

<script>
export default {
  props: ["currentProduct"],
  data() {
    return {};
  },
  methods: {},
};
</script>
