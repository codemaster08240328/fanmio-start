<template>
  <div class="item">
    <img class="cart-item-img" :src="require('@/assets/item.png')" alt="" />
    <span class="badge">{{ badgeCount }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BadgeItem',

  props: {
    badgeCount: Number,
  },
});
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  padding-top: 20px;
  display: inline-block;

  .badge {
    position: absolute;
    right: -7px;
    top: 11px;
    background: rgba(114, 114, 114, 0.9);
    border-radius: 50%;
    color: white;
    font-size: 1em;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.cart-item-img {
  width: 100%;
}
</style>
