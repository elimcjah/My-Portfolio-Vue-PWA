<template>
<header>
  <nav class="menu">
    <ul>
      <li><a href="#/home" target="_self" rel="noopener">Home</a></li>
      <li><a href="#/about" target="_self" rel="noopener">About</a></li>
      <li><a href="#/contact" target="_self" rel="noopener">Reach Me</a></li>
    </ul>
  </nav>
</header>
</template>

<script>
  export default {
    name: 'app-nav-bar',
  };
</script>

<style scoped>
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  overflow: hidden;
  width: 100%;
}

header ul {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
}

li:hover {
  background-color: #aaa;
}
</style>
