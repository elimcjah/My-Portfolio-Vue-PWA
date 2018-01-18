<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar';

export default {
  name: 'app',
  components: {
    AppNavBar,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}
</style>
