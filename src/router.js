import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Main from "./views/Main.vue";
import Materials from "./views/Materials.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "main",
      components: {
        header: AppHeader,
        default: Main,
        footer: AppFooter
      }
    },
    {
      path: "/materials",
      name: "materials",
      components: {
        header: AppHeader,
        default: Materials,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
