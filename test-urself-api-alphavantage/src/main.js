import { createApp } from "vue";
import App from "./App.vue";

import UserInput from "./components/UserInput.vue";
import UserResult from "./components/UserResult.vue";
import MutterGrid from "./components/MutterGrid.vue";

const daApp = createApp(App);

daApp.component("user-input", UserInput);
daApp.component("user-result", UserResult);
daApp.component("mutter-grid", MutterGrid);

daApp.mount("#app");
