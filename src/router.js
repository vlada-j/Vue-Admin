import Vue from 'vue'
import Router from 'vue-router'
import auth from './shared/auth'
import ThePageNotFound from './shared/components/ThePageNotFound.vue'


Vue.use(Router);

auth.setLogoutRedirect( { name: 'login' } );

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/login',
			component: () => import(/* webpackChunkName: "app-logi" */ './Public/login.vue')
		},

		{
			path: '/',
//			beforeEnter: auth.authGard,
			component: () => import(/* webpackChunkName: "app-layout" */ './shared/components/AppLayout.vue'),
			children: []
		},

		{ path: "*", component: ThePageNotFound }
	]
});