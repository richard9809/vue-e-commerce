import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";

import Calendar from "primevue/calendar";

import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel"

// import TabMenu from "primevue/tabmenu";
// import Button from "primevue/button";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(PrimeVue);
app.component("Calendar", Calendar);
app.component("InputText", InputText);
app.component("FloatLabel", FloatLabel);
// app.component(TabMenu);
// app.component(Button)

app.use(createPinia());
app.use(router);

app.mount("#app");
