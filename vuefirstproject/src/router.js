import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import SearchView from './views/SearchView.vue';
import ListArticlesView from './views/ListArticlesView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/list-articles',
    name: 'Articles',
    component: ListArticlesView,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;