<script>
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppSidebarSecondary from './AppSidebarSecondary.vue'

export default {
	name: 'AppLayout',

	components: {
		AppHeader,
		AppSidebar,
		AppSidebarSecondary
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<v-app>
		<app-sidebar />

		<app-header />

		<app-sidebar-secondary />

		<v-content class="main-container">
			<v-container fluid>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<router-view></router-view>
			</v-container>
		</v-content>
		<v-footer app dark color="blue-grey darken-4">
			<v-spacer></v-spacer>
			<div>Admin &copy; {{ new Date().getFullYear() }}</div>
			<v-spacer></v-spacer>
		</v-footer>
	</v-app>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style lang="scss">
@import "../config.scss";

.v-toolbar__content {
	padding:0;
}

.v-toolbar__extension {
	background-color:$secondary-sidebar-color;
}

.header-title {
	height: 64px;
	padding: 16px;
	position:relative;
	background-color:#FFF;

	&:before {
		content:'';
		top:0;
		left:-32px;
		position:absolute;
		border-top:64px solid transparent;
		border-right:32px solid #FFF;
	}
	&:after {
		content:'';
		top:0;
		right:-32px;
		position:absolute;
		border-bottom:64px solid transparent;
		border-left:32px solid #FFF;
	}

	.v-toolbar__title {
		line-height: 32px;
		border-top: 3px solid #00B0FF;
		text-transform:uppercase;
	}
}

.header-menu-button {
	line-height:64px;
	position:relative;
	text-align:right;
	margin-right:32px;;

	&.is-open { padding-left:300px }

	&:after {
		content:'';
		top:0;
		right:-32px;
		position:absolute;
		border-bottom:64px solid transparent;
		border-left:32px solid $secondary-sidebar-color;
	}
}

.header-toolbar {
	line-height:64px;
	position:relative;
	text-align:right;

	&.is-open { width: calc( #{$secondary-sidebar-width} - 32px) }

	&:before {
		content:'';
		top:0;
		left:-32px;
		position:absolute;
		border-top:64px solid transparent;
		border-right:32px solid $secondary-sidebar-color;
	}
}
.main-container {
	&.is-open { margin-left: $secondary-sidebar-width }
}
</style>