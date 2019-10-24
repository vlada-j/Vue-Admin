<template>
	<section class="page-login">
		<input type="email" v-model="email">
		<input type="password" v-model="password">
		<button @click="login()">Login</button>
		<p>{{error}}</p>
	</section>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<script>
import Public from './Public';

export default {
	name: 'login',

	data() {
		return {
			email: 'vlada@admin.com',
			password: '1234',
			error: ''
		}
	},

	methods: {
		login() {
			Public.login(this.email, this.password)
				.then(res => {
					if (res.error) {
						this.error = res.error;
					} else {
						this.$router.push({ name: 'home' })
					}
				});
		}
	}
}
</script>