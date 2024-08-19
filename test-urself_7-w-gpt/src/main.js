import { createApp } from "vue";
import App from "./App.vue";

import ProductList from "./components/ProductList.vue";
import ProductItem from "./components/ProductItem.vue";
import SelectedProduct from "./components/SelectedProduct.vue";

const daApp = createApp(App);

daApp.component("product-list", ProductList);
daApp.component("product-item", ProductItem);
daApp.component("selected-product", SelectedProduct);

daApp.mount("#app");
