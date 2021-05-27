<template>
  <div class="home">
    <h3>icon组件</h3>
    <Icon />
    <h3>button组件</h3>
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
