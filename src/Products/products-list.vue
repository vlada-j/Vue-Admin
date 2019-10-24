<template>
	<section class="products-list">
		<ul>
			<li v-for="item in list">{{item}}</li>
		</ul>
		{{error}}
	</section>
</template>

<script>
import Products from './Products'
export default {
	name: 'products-list',

	data() {
		return {
			list: [],

			error: ''
		}
	},

	methods: {

	},

	mounted() {
		Products.getAll()
			.then(res => this.list = res.data)
			.catch(err => this.error)
	}
}
</script>