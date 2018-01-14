<template>
  <main>
    <div v-for="n in 4"></div>
    <div class="big"></div>
    <div v-for="n in 2"></div>
    <div>Elijah</div>
    <div v-for="n in 6"></div>
    <div class="extrabig"></div>
    <div v-for="n in 15"></div>
    <div>McClendon</div>
    <div v-for="n in 14"></div>
    <div class="extrabig"></div>
    <div v-for="n in 2"></div>
    <div class="big"></div>
    <div v-for="n in 27"></div>
    <div>Software</div>
    <div v-for="n in 9"></div>
    <div class="extrabig"></div>
    <div v-for="n in 30"></div>
    <div>Developer</div>
    <div v-for="n in 11"></div>
    <div class="big"></div>
    <div v-for="n in 25"></div>
    <div class="big"></div>
    <div v-for="n in 22"></div>
    <div class="big"></div>
    <div v-for="n in 8"></div>
    <div class="superbig">CSS</div>
    <div v-for="n in 27"></div>
    <div class="big"></div>
    <div v-for="n in 23"></div>
    <div class="extrabig"></div>
    <div v-for="n in 30"></div>
    <div class="big">Portfolio</div>
    <div v-for="n in 55"></div>
    <div class="bigger"></div>
    <div v-for="n in 21"></div>
    <div class="bigger"></div>
    <div v-for="n in 44"></div>
  </main>
</template>

<script>
  export default {
    name: 'base-splash',
  };
</script>

<style lang="scss" scoped >
  @for $i from 1 through 400 {
    $red: random(255);
    $green: random(255);
    $blue: random(255);

    main div:nth-child(#{$i}){
      background: rgb($red, $green, $blue);
    }
  }

  @mixin bigger($c, $r){
    grid-column-end: span $c;
    grid-row-end: span $r;
  }

  body {
    margin: 1vw 0 0 1vw;
    color: #222;
    font-family: Bungee;
    font-size: 2vw;
    text-shadow: 1px 2px #eee;
  }

  main {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }

  div {
    box-sizing: border-box;
    border-right: 1vw solid #fff;
    border-bottom: 1vw solid #fff;
    width: 100%;
    min-height: 12.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:empty){
      position: sticky;
      top: 0;
      &.big{
        top: 12.5vw;
      }
    }
  }

  .big {
    @include bigger(2, 2);
  }

  .extrabig {
    @include bigger(3, 3);
  }

  .superbig {
    @include bigger(4, 4);
    font-size: 2em;
  }
</style>
