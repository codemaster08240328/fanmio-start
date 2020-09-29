<template>
  <div class="item">
    <img :src="require('@/assets/item.png')" alt="">
    <span class="badge">{{ badgeCount }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BadgeItem',

  props: {
    badgeCount: Number,
  }
})
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  padding-top: 20px;
  display: inline-block;

  img {
    min-width: 125px;
    height: 125px;
  }  

  .badge {
    position: absolute;
    right: -18px;
    top: 0px;
    background: rgba(114, 114, 114, .9);
    border-radius: 50%;
    color: white;
    font-size: 26px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
