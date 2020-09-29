<template>
  <section>
    <div class="discount-content">
      <cart :items="cartItems" />
      <hr />
      <b-field grouped>
        <b-input
          placeholder="Discount code"
          expanded
          custom-class="discount-input"
        />
        <p class="control">
          <b-button
            class="is-primary bg-color-background-light-dark discount-btn"
            @click="applyDiscount"
          >
            Apply
          </b-button>
        </p>
      </b-field>
      <hr />
      <prices :items="cartItems" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Cart from './Cart.vue';
import Prices from './Prices.vue';

import LINE_ITEMS from '@/mock/line-items.json';

import callGraphQL from '@/wrapper';
import { ListCartItemsQuery } from '@/API';
import { listCartItems } from '@/graphql/queries';
import AsyncComputed from 'vue-async-computed';

import { CartItem, ItemPrice } from '@/types';

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

      return (
        data?.listCartItems?.items?.map(
          (item) =>
            ({
              id: item?.id,
              title: item?.title,
              subtitle: item?.subtitle,
              quantity: item?.quantity,
              price: {
                amount: item?.price?.amount,
                currency: item?.price?.currency
              } as ItemPrice
            } as CartItem)
        ) || []
      );
    }
  }
})
export default class Discount extends Vue {
  applyDiscount() {}
}
</script>

<style lang="scss">
@import '@/style/base.scss';
.discount {
  background: #1f1b32;

  hr {
    border: 0.5px solid #4c495b;
  }
}

.discount-input {
  background: transparent !important;
  border: 2px solid $fanmio-light-dark !important;
  color: $fanmio-super-light-dark !important;

  ::placeholder {
    color: $fanmio-super-light-dark !important;
  }
}

.discount-content {
  width: 90.5%;
  float: right;
  margin-top: 3.2em;

  @include media('<tablet') {
    width: calc(100%);
    margin-top: 0px;
  }
}

.discount-btn {
  color: $fanmio-super-light-dark !important;
}
</style>
