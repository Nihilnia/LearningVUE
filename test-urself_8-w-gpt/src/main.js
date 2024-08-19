import { createApp } from "vue";
import App from "./App.vue";

import UserList from "./components/UserList.vue";
import UserItem from "./components/UserItem.vue";
import UserDetails from "./components/UserDetails.vue";

const daApp = createApp(App);

daApp.component("user-list", UserList);
daApp.component("user-item", UserItem);
daApp.component("user-details", UserDetails);

daApp.mount("#app");
