<template>
  <div class="cart-item">
    <div class="item-content">
      <badge-item :badge-count="item.quantity" class="badge-wrapper" />
      <div class="description">
        <h3 class="title">{{ item.title }}</h3>
        <p class="subtitle">{{ item.subtitle }}</p>
      </div>
    </div>
    <div class="item-price">
      <h3>
        {{ getStyledPrice(item.price) }}
      </h3>
    </div>
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
  @Prop({ default: {} }) readonly item!: ItemType;

  getStyledPrice(price: ItemPrice): string {
    if (price.amount === 0) return 'Included';

    return `${getCurrencySymbol(price.currency)}${price.amount}`;
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base.scss';

.cart-item {
  display: flex;
  margin-bottom: 14px;
  width: 100%;

  .item-content {
    display: flex;
    width: 80%;

    .badge-wrapper {
      width: 19.33%;
    }

    .description {
      padding-left: 26px;
      margin: auto 0;

      width: 80%;

      h3.title {
        color: white;
        font-size: 30px;
      }
      p.subtitle {
        color: $fanmio-super-light-light-dark;
        font-size: font-size('x-small');
        font-weight: 700;
      }
    }
  }

  .item-price {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    padding-left: auto;
  }
}
</style>
