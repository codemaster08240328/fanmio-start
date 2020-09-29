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
import Vue, { PropType } from 'vue'
import BadgeItem from './BadgeItem.vue';
import { getCurrencySymbol } from '@/utils/currency-service';

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

export default Vue.extend({
  name: 'CartItem',

  components: {
    BadgeItem
  },

  props: {
    item: {
      type: Object as PropType<ItemType>,
    }
  },

  methods: {
    getStyledPrice(price: PriceType) {
      if (price.amount === 0) return 'Included'

      return `${getCurrencySymbol(price.currency)}${price.amount}`;
    }
  }
})
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
