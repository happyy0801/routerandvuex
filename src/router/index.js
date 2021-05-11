import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout";
import HelloWorld from "@/components/HelloWorld";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
  {
    path: "/hello",
    component: HelloWorld,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
