<template>
  <i :class="'ca-icon-' + name" class="iconfont"></i>
</template>

<script lang="ts">
export default {
  name: 'CaIcon',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
@import '../fonts/iconfont.css';
</style>
