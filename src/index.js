import Vue from 'vue'
import App from './App.vue'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data: {
    items: [1, 2, 3, 4, 5, 6]
  },
  render: h => h(App)
})
