<template>
  <div class="cart">
    <cart-item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import CartItem from './CartItem.vue';
import { CartItem as ItemType } from '@/types';

@Component({
  components: { CartItem },
})
export default class Cart extends Vue {
  @Prop({default: []}) readonly items!: Array<ItemType>;
};
</script>
