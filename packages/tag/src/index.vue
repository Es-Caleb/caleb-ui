<template>
  <span :class="'ca-tag' + classes" :style="{background: presetColorTypes(color) ? '' : color}">
    <slot />
    <i v-if="closable" class="ca-icon-close ca-tag-close" @click="handleClose"></i>
  </span>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  name: 'CaTag',
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose(event) {
      event.stopPropagation()
      this.$emit('close', event)
    },
    presetColorTypes(color) {
      const colorType = [
        'magenta',
        'red',
        'volcano',
        'orange',
        'gold',
        'lime',
        'green',
        'cyan',
        'blue',
        'geekblue',
        'purple'
      ]
      if (!color) {
        return ''
      }

      if (colorType.indexOf(color) > -1) {
        return true
      }
      return false
    }
  },
  computed: {
    classes() {
      const colorClass = this.color === '' ? '' : this.presetColorTypes(this.color) ? ' ca-tag-' + this.color : ' ca-tag-has-color'
      const typeClass = this.type ? ' ca-tag-' + this.type : ''
      return `${typeClass}${colorClass}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import './tag.scss';
</style>
