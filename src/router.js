import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routeLink = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      meta: {
        title: '主页'
      },
      component: () => import('./views/index.vue')
    }

  ]
});
routeLink.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default routeLink
