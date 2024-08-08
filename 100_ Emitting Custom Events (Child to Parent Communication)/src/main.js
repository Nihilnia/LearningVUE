import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("foo-ter", Footer);

app.mount("#app");
