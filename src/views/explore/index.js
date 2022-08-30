import { Router } from "@/plugins";

const ExploreView = import(
  /* webpackChunkName: "explore" */ "@/views/explore/ExploreView.vue"
);

Router.addRoutes([
  {
    path: "/explore",
    name: "explore",
    component: () => ExploreView,
  },
]);
