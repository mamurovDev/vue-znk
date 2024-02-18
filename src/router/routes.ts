import { RouteRecordRaw } from "vue-router";
import MainLayout from "layouts/MainLayout.vue";
import RegisterLayoutVue from "layouts/RegisterLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
  },
  {
    path: "/register",
    component: RegisterLayoutVue,
    children: [
      {
        path: "",
        redirect: { name: "Login" }, // Redirect to the Login route
      },
      {
        path: "login",
        component: () => import("pages/LoginPage.vue"),
        name: "Login", // Give the route a name
      },
      {
        path: "signup",
        component: () => import("pages/SignupPage.vue"),
        name: "Signup",
      },
    ],
  },
  // Error route
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
