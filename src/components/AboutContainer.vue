<template>
  <div id="container-about">
    <h1>This is my About page</h1>
    <h2>Me me me me me...</h2>
    <about-examples></about-examples>
  </div>
</template>

<script>
  import AboutExamples from '@/components/AboutExamples';

  export default {
    name: 'about-container',
    components: {
      AboutExamples,
    },
  };
</script>

<style scoped>

</style>
