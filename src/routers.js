import homeView from "./components/homeView.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/HelloWorld.vue"),
  },
  {
    path: "/BuscarRep",
    name: "BuscarRep",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/BuscarRep.vue"),
  },
  {
    path: "/PerfilRep",
    name: "PerfilRep",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/PerfilRep.vue"),
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;