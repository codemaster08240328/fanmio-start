<template>
  <div id="app">
    <div class="adj-div-left" />
    <checkout />
    <div class="adj-div-right" />
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

<style lang="scss">
@import '@/style/base.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  display: flex;
}

.adj-div {
  &-left {
    width: 11.8%;
    background-color: $fanmio-white;

    @include media('<tablet') {
      display: none;
    }
  }

  &-right {
    width: 11.8%;
    background-color: $fanmio-primary-dark;

    @include media('<tablet') {
      display: none;
    }
  }
}
</style>

