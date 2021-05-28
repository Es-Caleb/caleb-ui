<template>
  <button
    class="ca-button"
    @click="onClick"
    :disabled="disabled || loading"
    :class="PrefixName + '-button ' + classes"
  >
    <i class="ca-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
import { PrefixName } from '../../styles/commonStyleName'
export default {
  name: 'CaButton',
  props: {
    // 按钮类型
    type: {
      type: String,
      default: ''
    },
    // 大小
    size: {
      type: String,
      default: ''
    },
    // 是否组件
    icon: String,
    // 是否幽灵按钮
    ghost: Boolean,
    // 是否为block按钮
    block: Boolean,
    // 是否圆角
    round: Boolean,
    // 是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 是否危险按钮
    danger: Boolean,
    // 是否禁用
    disabled: Boolean
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      PrefixName: PrefixName
    }
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
      const loadingClass = this.loading ? ' loading' : ''
      // 是否为圆角
      const roundClass = this.round ? ' round' : ''
      // 是否禁用
      const disabledClass = this.disabled ? ' disabled' : ''
      // 是否幽灵按钮
      const ghostClass = this.ghost ? ' ghost' : ''
      // 是否为block按钮
      const blockClass = this.block ? ' block' : ''
      // 是否危险按钮
      const dangerClass = this.danger ? ' danger' : ''
      const iconClass = this.icon && !this.$slots.default ? ' ca-button-icon' : ''
      return `${this.type} ${this.size}${loadingClass}${roundClass}${disabledClass}${ghostClass}${blockClass}${dangerClass}${iconClass}`
    }
  }
}
</script>

<style lang="scss">
@import './button.scss';
</style>
