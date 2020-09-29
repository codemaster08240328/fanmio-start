<template>
  <div class="prices">
    <div class="price">
      <h3>Subtotal</h3>
      <div class="valid-price">{{ `$${subtotal}` }}</div>
    </div>
    <div class="price">
      <h3>Shipping</h3>
      <div class="invalid-price">{{ shipping }}</div>
    </div>
    <hr />
    <div class="price">
      <h3>Total</h3>
      <div class="total-price">
        {{ currency }} <span class="total-price-value">{{ `$${total}` }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { CartItem, ItemPrice } from '@/types';

@Component
export default class Prices extends Vue {
  @Prop({default: []}) readonly items!: Array<CartItem>;

  private shippingPrice: number = -1;

  get currency(): string {
    return this.items?.[0]?.price?.currency || 'USD';
  }

  get subtotal(): number {
    return this.items?.reduce((a, item) => a + item.price.amount, 0) || 0;
  }

  get shipping(): number | string {
    return this.shippingPrice !== -1
      ? this.shippingPrice
      : 'Calculated at next step';
  }

  get total(): number {
    return this.subtotal + Number(this.shippingPrice);
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base.scss';

.prices {
  .price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: font-size('medium');
    font-weight: 700;
    color: white;

    .invalid-price {
      font-size: font-size('x-small');
      color: $fanmio-super-light-light-dark;
    }

    .total-price-value {
      font-size: font-size('x-large');
    }
  }
}
</style>
