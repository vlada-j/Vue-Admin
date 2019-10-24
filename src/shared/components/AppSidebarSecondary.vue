<script>
import eventBus from '../eventBus'


export default {
	name: 'AppSidebarSecondary',

	data() {
		return {
			isOpen: false,
			active: null,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		}
	},

	methods: {
		update(e) {
			eventBus.$emit('notificationbar-change', this.isOpen)
		},

		setSidebar(val) {
			if (typeof val === 'number') {
				this.active = val;
				this.isOpen = true;
			} else {
				this.isOpen = val;
			}
		}
	},

	created() {
		eventBus.$on('notificationbar-change', this.setSidebar);
	},

	destroy() {
		eventBus.$off('notificationbar-change', this.setSidebar);
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<v-navigation-drawer class="app-sidebar-secondary"
			v-model="isOpen"
			@input="update($event)"
			fixed
			temporary
			right
			hide-overlay
	>
		<v-tabs
				v-model="active"
				color="blue-grey darken-4"
				dark
				grow
				slider-color="light-blue"
		>
			<v-tab ripple>
				<v-icon>notifications_none</v-icon>
			</v-tab>
			<v-tab-item>
				<v-card flat>
					<v-card-text>notifications_none {{ text }}</v-card-text>
				</v-card>
			</v-tab-item>

			<v-tab ripple>
				<v-icon>settings</v-icon>
			</v-tab>
			<v-tab-item>
				<v-card flat>
					<v-card-text>settings {{ text }}</v-card-text>
				</v-card>
			</v-tab-item>

			<v-tab ripple>
				<v-icon>query_builder</v-icon>
			</v-tab>
			<v-tab-item>
				<v-card flat>
					<v-card-text>query_builder {{ text }}</v-card-text>
				</v-card>
			</v-tab-item>
		</v-tabs>
		{{active}}
	</v-navigation-drawer>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped lang="scss">
.app-sidebar-secondary {
	top:64px;
	bottom:0;
	height:auto !important;
}
</style>