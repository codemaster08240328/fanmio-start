<template>
  <div class="cart-item">
    <div class="item-content">
      <badge-item :badge-count="item.quantity" />
      <div class="description">
        <h3 class="title">{{ item.title }}</h3>
        <p class="subtitle">{{ item.subtitle }}</p>
      </div>
    </div>
    <div class="item-price">{{ getStyledPrice(item.price) }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import BadgeItem from './BadgeItem.vue';
import { CartItem as ItemType, ItemPrice } from '@/types';
import { getCurrencySymbol } from '@/utils/currency-service';

@Component({
  components: { BadgeItem }
})
export default class CartItem extends Vue {
  @Prop({default: {}}) readonly item!: ItemType

  getStyledPrice(price: ItemPrice): string {
    if (price.amount === 0) return 'Included'

    return `${getCurrencySymbol(price.currency)}${price.amount}`;
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;

  .item-content {
    display: flex;

    .description {
      padding-left: 26px;
      margin: auto 0;

      h3.title {
        color: white;
        font-size: 30px;       
      }
      p.subtitle {
        color: #AAAAAA;
        font-size: 24px;
      }
    }
  }

  .item-price {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    min-width: 150px;
    padding-left: auto;
    margin-left: 15px;
    font-size: 30px;
    font-weight: 700;
  }
}
</style>
