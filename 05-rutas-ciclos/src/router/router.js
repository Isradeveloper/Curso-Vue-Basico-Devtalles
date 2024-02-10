// import ListPage from "@/modules/pokemon/pages/ListPage";
// import AboutPage from "@/modules/pokemon/pages/AboutPage";
// import PokemonPage from "@/modules/pokemon/pages/PokemonPage";
import NoPageFound from "@/modules/shared/pages/NoPageFound";
import { isAuthenticatedGuard } from '@/router/auth-guard';
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/pokemon"
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import('@/modules/pokemon/layouts/PokemonLayout'),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () => import(/* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () => import(/* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"),
      },
      {
        path: "pokemon/:id",
        name: "pokemon-id",
        component: () => import(/* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"),
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN( id ) ? { id:1 } : { id }
        }
      },
      {
        path: "",
        redirect: { name: 'pokemon-home' }
      }
    ]
  },
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [isAuthenticatedGuard],
    component: () =>import("@/modules/dbz/layouts/DragonBallLayout"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component:()=>import("@/modules/dbz/pages/Characters")
      },
      {
        path: "about",
        name: "dbz-about",
        component: () => import("@/modules/dbz/pages/About")
      },
      {
        path: "",
        redirect:{name:'dbz-characters'}
      }
    ]
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


// Guard Global - Síncrono
// router.beforeEach( (to, from, next) => {
//   console.log({to, from, next});

//   const random = Math.random() * 100

//   if (random < 50){
//     console.log('Autenticado');
//     next()
//   } else {
//     console.log(random, 'Bloqueado por el beforeEach Guard');
//     next({name: "pokemon-home"})
//   }

// })


// const canAccess = (to, from, next) => {
//   return new Promise( (resolve) => {

//     const random = Math.random() * 100

//     if (random < 50){
//       console.log('Autenticado - canAccess');
//       resolve(true)
//     } else {
//       console.log(random, 'Bloqueado por el beforeEach Guard - canAccess');
//       // next({name: "pokemon-home"})
//       resolve(false)
//     }

//   })
// }

// router.beforeEach( async (to, from, next) => {

//   const authorized = await canAccess(to, from, next)

//   authorized ? next() : next({name: "pokemon-home"})

// })

export default router;
