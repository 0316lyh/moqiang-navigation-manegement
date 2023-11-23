import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = true;
axios.defaults.baseURL = 'http://localhost:8082';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";

Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
