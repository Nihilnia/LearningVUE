import { createApp } from "vue";
import App from "./App.vue";

import SingleCard from "./components/SingleCard.vue";
import CardsGrid from "./components/CardsGrid.vue";

const daApp = createApp(App);

daApp.component("single-card", SingleCard);
daApp.component("cards-grid", CardsGrid);

daApp.mount("#app");
