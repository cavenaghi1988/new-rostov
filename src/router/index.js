import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
import Page3 from "../views/Page3.vue";
import Page4 from "../views/Page4.vue";
import Page5 from "../views/Page5.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/page1",
    name: "Page1",
    component: Page1
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2
  },
  {
    path: "/page3",
    name: "Page3",
    component: Page3
  },
  {
    path: "/page4",
    name: "Page4",
    component: Page4
  },
  {
    path: "/page5",
    name: "Page5",
    component: Page5
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});



export default router;