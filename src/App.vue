<template>
  <div id="app">
    <img v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }]
      }
    }
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
