// import ListPage from "@/modules/pokemon/pages/ListPage";
// import AboutPage from "@/modules/pokemon/pages/AboutPage";
// import PokemonPage from "@/modules/pokemon/pages/PokemonPage";
import NoPageFound from "@/modules/shared/pages/NoPageFound";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"),
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"),
  },
  {
    path: "/:id",
    name: "pokemon-id",
    component: () => import(/* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"),
    props: (route) => {
      const id = Number(route.params.id)
      return isNaN( id ) ? { id:1 } : { id }
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: NoPageFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
