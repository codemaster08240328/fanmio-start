<template>
  <b-navbar spaced class="navbar">
    <template slot="brand">
      <b-navbar-item>
        <img :src="require('@/assets/fanmio-logo.png')" alt="The Fanmio Logo">
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
.navbar {
  padding-left: 0 !important;

  .navbar-item {
    padding-left: 0 !important;
  }
}
</style>
