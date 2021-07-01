import CaTag from './src/index.vue'

CaTag.install = function(Vue) {
  Vue.component(CaTag.name, CaTag)
}

export default CaTag
