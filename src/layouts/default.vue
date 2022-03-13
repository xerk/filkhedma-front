<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import Nav from "./components/nav.vue";
	import Footer from "./components/footer.vue";
</script>

<template>
	<div class="overflow-x-hidden bg-gray-100 min-h-full">
		<Nav />
		<router-view></router-view>
		<Footer />
	</div>
</template>