import { createApp } from "vue";
import App from "./App.vue";

import GloriaAI from "./components/GloriaAI.vue";

const app = createApp(App);

app.component("gloria-ai", GloriaAI);

app.mount("#app");
