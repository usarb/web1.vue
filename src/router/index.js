import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "@/views/Contact";
import Product from "@/views/Product";
import Product2 from "@/views/Product2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/product",
    name: "Product",
    component: Product
  },
  {
    path: "/product2",
    name: "Product2",
    component: Product2
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
