import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch,
    faArrowCircleLeft,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faPhone,
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faSearch,
    faArrowCircleLeft,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faPhone,
    faCalendarAlt
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
