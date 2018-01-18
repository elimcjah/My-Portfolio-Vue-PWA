import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
// import BaseSplash from '@/components/BaseSplash';
import HomeContainer from '@/components/HomeContainer';
import AboutContainer from '@/components/AboutContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeContainer',
      component: HomeContainer,
    },
    {
      path: '/about',
      name: 'AboutContainer',
      component: AboutContainer,
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
