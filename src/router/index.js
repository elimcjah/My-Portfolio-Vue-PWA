import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import BaseSplash from '@/components/BaseSplash';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseSplash',
      component: BaseSplash,
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
