import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";

import Card from "primevue/card";
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Rating from "primevue/rating";
import Dropdown from "primevue/dropdown";
import Dialog from "primevue/dialog";


import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(PrimeVue);
app.component("Button", Button);
app.component("Breadcrumb", Breadcrumb);
app.component("Card", Card);
app.component("FloatLabel", FloatLabel);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.component("IconField", IconField);
app.component("InputIcon", InputIcon);
app.component("Rating", Rating);
app.component("Dropdown", Dropdown);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.component("Dialog", Dialog);

app.use(createPinia());
app.use(router);

app.mount("#app");
