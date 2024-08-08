import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

const Mutter = createApp(App);

Mutter.component("friend-contact", FriendContact);

Mutter.mount("#app");
