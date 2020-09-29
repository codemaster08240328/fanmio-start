<template>
  <div class="logo-wrapper">
    <img
      :src="require('@/assets/fanmio-desktop.png')"
      alt="The Fanmio Logo"
      class="desktop-logo"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
@import '@/style/base.scss';
.logo-wrapper {
  margin-top: 3.2em;

  @include media('<tablet') {
    margin-top: 0px;

    padding: 29px;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-color: $fanmio-light-grey;
  }

  .desktop-logo {
    width: 30.6%;

    @include media('<tablet') {
      width: 50%;
    }
  }
}
</style>
