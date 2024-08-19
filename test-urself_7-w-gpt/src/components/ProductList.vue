<template>
  <product-item
    v-for="f in allProducts"
    :key="f.id"
    :id="f.id"
    :name="f.name"
    :price="f.price"
    :description="f.description"
    @selected-item="forwardSelection"
  >
  </product-item>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  props: ["all-products"],
  data() {
    return {};
  },
  methods: {
    forwardSelection(id) {
      console.log("asdasd2");
      this.$emit("selected-item", id);
    },
  },
};
</script>
