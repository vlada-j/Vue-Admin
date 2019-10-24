<script>
import eventBus from '../eventBus'


export default {
	name: 'AppSidebar',

	data: () => ({
		value: false,
		windowWidth: window.innerWidth,
		items: [
			{ title: 'Home', icon: 'dashboard' },
			{ title: 'About', icon: 'question_answer' }
		]
	}),

	computed: {
		isMini() { return this.windowWidth < 600 ? false : !this.value },
		isOpen() { return this.value || this.windowWidth >= 600 }
	},

	methods: {
		update(v) {
			eventBus.$emit('sidebar-change', v)
		},
		setSidebar(val) {
			this.value = val;
		},
		onResize() {
			this.windowWidth = window.innerWidth
		},
	},

	mounted() {
		this.value = false;
	},

	created() {
		eventBus.$on('sidebar-change', this.setSidebar);
	},

	destroy() {
		eventBus.$off('sidebar-change', this.setSidebar);
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<v-navigation-drawer class="app-sidebar blue-grey lighten-4"
						 v-resize="onResize"
						 app
						 fixed
						 hide-overlay
						 mobile-break-point="600"
						 mini-variant-width="64"
						 :mini-variant="isMini"
						 :value="isOpen"
						 @input="update"
	>
		<v-toolbar dark height="64" class="blue-grey darken-4">
				<v-spacer></v-spacer>
			<v-toolbar-title class="ma-0">
				<v-icon color="light-blue">fab fa-atlassian</v-icon>
			</v-toolbar-title>
				<v-spacer></v-spacer>
		</v-toolbar>

		<v-list dark class="blue-grey darken-4">
			<v-list-tile avatar tag="div">
				<v-list-tile-avatar>
					<img src="https://randomuser.me/api/portraits/men/85.jpg">
				</v-list-tile-avatar>

				<v-list-tile-content>
					<v-list-tile-title>John Leider</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>

		<v-list dense>
			<v-divider light></v-divider>

			<v-list-tile
					v-for="item in items"
					:key="item.title"
					@click=""
			>
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>

				<v-list-tile-content>
					<v-list-tile-title>{{ item.title }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style lang="scss">
.v-navigation-drawer--mini-variant .v-list__tile { padding:0 8px; }
</style>