import { createApp } from "vue";
import App from "./App.vue";

import LoginForm from "login-form/LoginForm"
import UserProfile from "user-profile/UserProfile";

const app = createApp(App);

app.component("login-form", LoginForm);
app.component("user-profile", UserProfile);

app.mount("#app");
