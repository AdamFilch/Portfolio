import { createApp } from "vue";
import "./assets/style.css";
import App from "./pages/App.vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

// Polyfill
// require("https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js").polyfill();

createApp(App).use(autoAnimatePlugin).mount("#app");
