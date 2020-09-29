<template>
  <div id="app">
    <checkout />
  </div>
</template>

<script lang="ts">
import Checkout from '@/components/Checkout.vue';

export default {
  name: 'App',

  components: {
    Checkout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
