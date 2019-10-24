import Vue from 'vue'
import router from './router'
import SETTINGS from './SETTINGS'


import auth from './shared/auth'
auth.initialize();


import Vuetify from 'vuetify'
Vue.use(Vuetify);



/* eslint-disable no-new */
new Vue({
	el: SETTINGS.APP_ROOT_ELEMENT,
	router,
	render: h => h('router-view'),
});


import 'vuetify/dist/vuetify.min.css';
// import './style/style.scss';
// import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';