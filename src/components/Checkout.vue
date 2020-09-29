<template>
  <div class="columns subscribe">
    <!-- <Header class="mobile-header" /> -->
    <Discount class="column" />
    <Form class="column" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
// import Header from './Header.vue';
import Discount from './Discount.vue';
import Form from './Form.vue';

@Component({
  components: {
    Discount,
    Form
  }
})
export default class Checkout extends Vue {}
</script>

<style lang="scss">
.subscribe {
  height: 100vh;
  flex-direction: row-reverse;
}
</style>
