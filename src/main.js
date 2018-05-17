import Vue from 'vue'
import App from './App.vue'

// Make Vue ignore custom elements defined outside of Vue 
// (e.g., using the Web Components APIs). 
// Otherwise, it will throw a warning about an Unknown custom element, 
// assuming that you forgot to register a global component or misspelled a component name.
Vue.config.ignoredElements = [
  'css-doodle'
]

new Vue({
  el: '#app',
  render: h => h(App)
})
