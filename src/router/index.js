import { createRouter, createWebHistory } from "@ionic/vue-router";
// import { RouteRecordRaw } from "vue-router";
// import TabsPage from "../views/TabsPage.vue";

// PAGES
import MemoriesPage from "@/pages/MemoriesPage";
import MemoryDetails from "@/pages/MemoryDetails";
import PageNotFound from "@/pages/PageNotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories/",
  },
  {
    path: "/memories/",
    component: MemoriesPage,
  },
  {
    path: "/memories/:id",
    component: MemoryDetails,
  },

  // 404
  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
  },
  // {
  //   path: "/tabs/",
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: "",
  //       redirect: "/tabs/tab1",
  //     },
  //     {
  //       path: "tab1",
  //       component: () => import("@/views/Tab1Page.vue"),
  //     },
  //     {
  //       path: "tab2",
  //       component: () => import("@/views/Tab2Page.vue"),
  //     },
  //     {
  //       path: "tab3",
  //       component: () => import("@/views/Tab3Page.vue"),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
