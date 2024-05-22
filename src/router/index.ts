import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PageLayout from "../views/PageLayout.vue";
import HomePage from "../views/HomePage.vue";
import DetailPage from "../views/DetailPage.vue";
import SearchPage from "../views/SearchView.vue";
import MyCourse from "../views/MyCourse.vue";
import MyAccount from "../views/MyAccountView.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/",
    name: "public",
    redirect: "/",
    component: PageLayout,
    children: [
      {
        path: "/",
        name: "homePage",
        component: HomePage,
      },
      {
        path: "/:slug",
        name: "detail",
        component: DetailPage,
      },
      {
        path: "/search",
        name: "search",
        component: SearchPage,
      },
      {
        path: "/my-course",
        name: "myCourse",
        component: MyCourse,
      },
      {
        path: "/my-account",
        name: "myAccount",
        component: MyAccount,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
