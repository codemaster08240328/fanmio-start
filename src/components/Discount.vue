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

import callGraphQL from '@/wrapper'
import { ListCartItemsQuery } from '@/API'
import { listCartItems } from '@/graphql/queries'
import AsyncComputed from 'vue-async-computed'

import { CartItem, ItemPrice } from '@/types'

@Component({
  components: {
    Cart,
    Prices
  },
  asyncComputed: {
    async cartItems() {
      const { data } = await callGraphQL<ListCartItemsQuery>(listCartItems, {
        filter: {
          userId: {
            eq: 'testuser_1234'
          }
        }
      });
  
      return data?.listCartItems?.items?.map(item => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        quantity: item?.quantity,
        price: {
          amount: item?.price?.amount,
          currency: item?.price?.currency
        } as ItemPrice
      } as CartItem)) || [];
    }
  }
})
export default class Discount extends Vue {
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
