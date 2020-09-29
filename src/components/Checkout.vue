<template>
  <div class="subscribe">
    <Header class="mobile-header" />
    <div class="mobile-accordion" @click="open = !open">
      <img
        class="cart-icon"
        :src="require('@/assets/cart.png')"
        alt="cart img"
      />
      <div class="color-background-pink cart-acc-text">Show order summary</div>
      <img
        v-if="open"
        class="up-icon"
        :src="require('@/assets/up.png')"
        alt="up-icon"
      />
      <img
        v-if="!open"
        class="up-icon"
        :src="require('@/assets/down.png')"
        alt="up-icon"
      />
    </div>
    <Discount v-if="open" class="discount-wrapper" />
    <Form class="form-wrapper" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Header from './Header.vue';
import Discount from './Discount.vue';
import Form from './Form.vue';

@Component({
  components: {
    Discount,
    Form,
    Header,
  },
})
export default class Checkout extends Vue {
  open = true;
}
</script>

<style lang="scss">
@import '@/style/base.scss';

.subscribe {
  height: 100vh;
  flex-direction: row-reverse;
  display: flex;

  @include media('<tablet') {
    flex-direction: column;
    width: 100%;
  }

  .form-wrapper {
    width: 58%;

    @include media('<tablet') {
      width: calc(100%);
      padding: 29px;
    }
  }

  .discount-wrapper {
    width: 42%;
    background-color: color('background');

    @include media('<tablet') {
      width: calc(100%);
      padding: 29px;
    }
  }
}

.mobile-header {
  @include media('>tablet') {
    display: none;
  }
}

.mobile-accordion {
  @include media('>tablet') {
    display: none;
  }

  padding: 29px;
  display: flex;
  align-items: center;

  border-style: solid;
  border-width: 0 0 2px 0;
  border-color: $fanmio-light-grey;

  .cart-acc-text {
    font-size: font-size('x-medium');
    font-weight: 700;
    margin-left: 10px;
  }

  .cart-img {
    width: 25px;
  }

  .up-icon {
    width: 15px;
    margin-left: 20px;
  }
}
</style>
