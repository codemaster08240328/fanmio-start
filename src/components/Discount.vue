<template>
  <section class="section discount">
    <div class="container is-fluid">
      <cart :items="cartItems" />
      <hr>
      <b-field grouped>
        <b-input
          placeholder="Discount code"
          expanded
          custom-class="discount-input"
        />
        <p class="control">
          <b-button
            class="is-primary"
            @click="applyDiscount"
          >
            Apply
          </b-button>
        </p>
      </b-field>
      <hr>
      <prices :items="cartItems" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Cart from './Cart.vue'
import Prices from './Prices.vue'

import LINE_ITEMS from '@/mock/line-items.json'

interface PriceType {
  currency: string,
  amount: number
}

interface ItemType {
  id: string,
  title: string,
  subtitle: string,
  quantity: number,
  price: PriceType
}

@Component({
  components: {
    Cart,
    Prices
  }
})
export default class Discount extends Vue {
  private cartItems: Array<ItemType> = [...LINE_ITEMS.lineItems]
  
  applyDiscount() {}
}
</script>

<style lang="scss">
.discount {
  background: #1F1B32;

  hr {
    border: .5px solid #4C495B;
  }

  .discount-input {
    background: transparent;
    border: 1px solid #4C495B;
    color: white;
    ::placeholder {
      color: #383545;
    }
  }
}
</style>
