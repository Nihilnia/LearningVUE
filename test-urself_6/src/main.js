import { createApp } from "vue";
import App from "./App.vue";

import KnowledgeGrid from "./components/KnowledgeGrid.vue";
import KnowledgeActive from "./components/KnowledgeActive.vue";

const DaApp = createApp(App);

DaApp.component("knowledge-grid", KnowledgeGrid);
DaApp.component("knowledge-active", KnowledgeActive);

DaApp.mount("#app");
