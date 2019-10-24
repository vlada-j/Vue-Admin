<script>
import eventBus from '../eventBus'


export default {
	name: 'AppHeader',

	data: () => ({
		sidebar: true,
		sidebarSecondary: false,
		searchForm: false,

		title: 'my admin',
	}),

	methods: {
		toggleSidebar() {
			eventBus.$emit('sidebar-change', !this.sidebar)
		},
		setSidebar(val) {
			this.sidebar = val ? val : !this.sidebar;
		},
		setNotificationbar(val) {
			this.sidebarSecondary = val ? val : !this.sidebarSecondary;
		},
		toggleSecondarySidebar() {
			this.sidebarSecondary = !this.sidebarSecondary;
			eventBus.$emit('notificationbar-change', 2)
		},
		toggleSearch(b) { this.searchForm = b },
	},

	mounted() {

	},

	created() {
		eventBus.$on('sidebar-change', this.setSidebar);
		eventBus.$on('notificationbar-change', this.setNotificationbar);
	},

	destroy() {
		eventBus.$off('sidebar-change', this.setSidebar);
		eventBus.$off('notificationbar-change', this.setNotificationbar);
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<v-toolbar app fixed height="64" color="blue-grey lighten-4">

		<div class="header-menu-button blue-grey darken-4">
			<v-toolbar-side-icon dark @click.stop="toggleSidebar"></v-toolbar-side-icon>
		</div>

		<div class="header-title">
			<v-toolbar-title>{{ title }}</v-toolbar-title>

		</div>

		<v-spacer></v-spacer>

		<div class="header-toolbar blue-grey darken-4" :class="{'is-open':sidebarSecondary}">
			<v-btn dark icon @click="toggleSearch(true)" v-if="!searchForm">
				<v-icon>search</v-icon>
			</v-btn>
			<v-btn dark icon @click="toggleSearch(false)" v-if="searchForm">
				<v-icon>clear</v-icon>
			</v-btn>

			<v-btn dark icon @click.stop="toggleSecondarySidebar"><v-icon>more_vert</v-icon></v-btn>
		</div>

		<template v-slot:extension v-if="searchForm">
			<v-text-field
					dark
					hide-details
					single-line
			></v-text-field>
			<v-btn dark icon>
				<v-icon>search</v-icon>
			</v-btn>
		</template>
	</v-toolbar>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped></style>