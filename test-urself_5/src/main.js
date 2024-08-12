import { createApp } from "vue";
import App from "./App.vue";

import ActiveTopic from "./components/ActiveTopic.vue";
import AllTopics from "./components/AllTopics.vue";

const app = createApp(App);

app.component("active-topic", ActiveTopic);
app.component("all-topics", AllTopics);

app.mount("#app");
