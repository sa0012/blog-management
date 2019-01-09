import Tabpane from './src/index.vue'

Tabpane.install = function (Vue) {
  Vue.component(Tabpane.name, Tabpane)
}

export default Tabpane
