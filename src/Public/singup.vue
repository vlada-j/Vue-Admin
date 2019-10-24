<template>
	<section class="singup">
		<label>Username:
			<input type="text" v-model="username">
			<small v-for="err in error.username"><br>{{err}}</small>
		</label>
		<br>
		<label>Email:
			<input type="email" v-model="email">
			<small v-for="err in error.email"><br>{{err}}</small>
		</label>
		<br>
		<label>Password:
			<input type="password" v-model="password">
			<small v-for="err in error.password"><br>{{err}}</small>
		</label>
		<br>
		<label>Confirm password:
			<input type="password" v-model="confirmPassword">
			<small v-if="!isPasswordConfirmed">Password is not confirmed</small>
		</label>
		<br>
<!--		<label>Avatar:
			<input type="file" @change="setAvatar($event)">
		</label>
		<br>-->
		<button @click="singup()">Sing Up</button>
	</section>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<script>
import Public from './Public';

export default {
	name: 'singup',

	data() {
		return {
			username: '',
			password: '',
			confirmPassword: '',
			email: '',
			avatar: '',

			error: {},
			isPasswordConfirmed: true
		}
	},

	methods: {
		setAvatar(e) {
			console.log('setAvatar', e);
		},
		singup() {
			this.error = {};
			this.isPasswordConfirmed = this.password === this.confirmPassword;

			if (this.isPasswordConfirmed) {
				Public.singup(this.username, this.email, this.password)
					.then(res=>{
						if (res.error) {
							this.error = res.error;
						} else {
							this.$router.push({ name: 'home' })
						}
					});
			}
		}
	}
}
</script>