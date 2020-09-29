<template>
  <div class="cart">
    <cart-item
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import CartItem from './CartItem.vue'

export default Vue.extend({
  name: 'Cart',

  components: {
    CartItem,
  },

  props: {
    items: Array,
  }
})
</script>
