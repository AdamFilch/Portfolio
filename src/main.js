import { createApp } from "vue";
import "./css/style.css";
import App from "./pages/App.vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

createApp(App).use(autoAnimatePlugin).mount("#app");
