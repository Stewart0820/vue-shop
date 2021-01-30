import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'

import axios from 'axios'
// 配置请求的根路径
// axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// axios拦截器
axios.interceptors.request.use(config=>{
  // 为请求头对象，。添加token验证的authorization字段
  config.headers.Authorization=window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})



Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
