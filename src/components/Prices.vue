<template>
  <div class="prices">
    <div class="price">
      <div class="price-title">Subtotal</div>
      <div class="valid-price">{{ `$${subtotal}` }}</div>
    </div>
    <div class="price">
      <div class="price-title">Shipping</div>
      <div class="invalid-price">{{ shipping }}</div>
    </div>
    <hr />
    <div class="price">
      <div class="price-title">Total</div>
      <div class="total-price">
        {{ currency }} <span class="total-price-value">{{ `$${total}` }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface PriceType {
  currency: string;
  amount: number;
}

interface ItemType {
  id: string;
  title: string;
  subtitle: string;
  quantity: number;
  price: PriceType;
}

@Component
export default class Prices extends Vue {
  @Prop(Array) readonly items!: Array<ItemType>;

  private shippingPrice: number = -1;

  get currency(): string {
    return this.items.length ? this.items[0].price.currency : '';
  }

  get subtotal(): number {
    return this.items.reduce((s, item) => (s += item.price.amount), 0);
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
.prices {
  .price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    color: white;

    .invalid-price {
      font-size: 24px;
      color: #727272;
    }

    .total-price-value {
      font-size: 50px;
    }
  }
}
</style>
