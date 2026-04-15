import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { vScrollAnimate } from "./components/vScrollAnimate";

const app = createApp(App);

app.directive("scroll-animate", vScrollAnimate);
app.use(router).mount("#app");
