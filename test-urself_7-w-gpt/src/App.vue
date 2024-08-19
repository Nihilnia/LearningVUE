<template>
  <selected-product :current-product="selectedItem"></selected-product>
  <product-list
    :all-products="products"
    @selected-item="handleSelectedProduct"
  ></product-list>
</template>

<script>
import SelectedProduct from "./components/SelectedProduct.vue";
export default {
  emits: ["selected-item"],
  components: { SelectedProduct },
  data() {
    return {
      products: [
        {
          id: 0,
          name: "Product-zero",
          price: 10,
          description: "Description of product-zero",
        },
        {
          id: 1,
          name: "Product-one",
          price: 20,
          description: "Description of product-one",
        },
        {
          id: 2,
          name: "Product-two",
          price: 30,
          description: "Description of product-two",
        },
      ],
      selectedItem: null,
    };
  },
  methods: {
    handleSelectedProduct(id) {
      console.log("asdasd3");
      this.selectedItem = this.products.find((product) => product.id === id);
    },
  },
};
</script>
