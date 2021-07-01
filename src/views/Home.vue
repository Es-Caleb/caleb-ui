<template>
  <div class="home">
    <h1>icon组件</h1>
    <Icon />

    <h1>button组件</h1>
    <Button />

    <h1>tag标签</h1>
    <Tag />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Icon from '@/components/Icon/index.vue'
import Button from '@/components/Button/index.vue'
import Tag from '@/components/Tag/index.vue'

@Options({
  components: {
    Icon,
    Button,
    Tag
  }
})
export default class Home extends Vue {}
</script>
