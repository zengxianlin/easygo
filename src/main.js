import Vue from 'vue'
import App from './App'
import store from './store.js'
import VueResource from 'vue-resource'
// import VueSocketio from 'vue-socket.io'
//
// Vue.use(VueSocketio, 'http://localhost:3333')
Vue.use(VueResource)

// 创建vue实例并渲染到app
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
