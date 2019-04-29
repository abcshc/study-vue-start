// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FrameScore from './components/scoreboard/FrameScore'

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  router,
  components: {
    App,
    'frame-score': FrameScore
  },
  template: '<App/>'
})
vm.$mount('#app')
