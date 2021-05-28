<template>
  <div class="home">
    <h2>icon组件</h2>
    <Icon />

    <h2>button组件</h2>
    <Button />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Icon from '@/components/Icon/Icon.vue'
import Button from '@/components/Button/Button.vue'

@Options({
  components: {
    Icon,
    Button
  }
})
export default class Home extends Vue {}
</script>
