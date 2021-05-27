import CaIcon from './icon'
import CaButton from './button'

const components = [CaIcon, CaButton]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const install = function (Vue) {
  if (install.installed) return
  components.map((component) => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}

export { install, CaIcon, CaButton }
