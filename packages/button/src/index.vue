<template>
  <button
    class="ca-button"
    @click="onClick"
    :disabled="disabled || loading"
    :class="classes"
  >
    <i class="ca-icon-loading" v-if="loading"></i>
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'CaButton',
  props: {
    // 按钮主题
    theme: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    round: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onClick (evt) {
      this.$emit('click', evt)
    }
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    classes () {
      // 是否显示加载中
      const loadingClass = this.loading ? ' ca-button-loading' : ''
      // 是否为圆角
      const roundClass = this.round ? ' is-round' : ''
      // 是否禁用
      const disabledClass = this.disabled ? ' is-disabled' : ''
      return `ca-button-${this.theme} ca-button-${this.size}${loadingClass}${roundClass}${disabledClass}`
    }
  }
}
</script>

<style lang="scss">
@import './button.scss';
</style>
