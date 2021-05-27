import CaButton from './src/index.vue'

CaButton.install = function (Vue) {
  Vue.component(CaButton.name, CaButton)
}

export default CaButton
