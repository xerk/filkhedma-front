<script>
	import JobItem from "./components/JobItem.vue";
	export default {
		components: {
			JobItem,
		},
		data() {
			return {
				jobs: [],
				meta: {},
				links: {},
			};
		},
		methods: {
			async getData(page = 1) {
				try {
					const { data } = await this.$http.get("jobs", {
						params: {
							page: page,
						},
					});
					console.log(data.meta);
					this.jobs = data.data;
					this.meta = data.meta;
					this.links = data.links;
				} catch (error) {
					console.log(error);
				}
			},
		},
		mounted() {
			this.getData();
		},
	};
</script>

<template>
	<div class="px-6 py-8">
		<div class="container flex justify-between mx-auto">
			<div class="w-full">
				<div class="flex items-center justify-between">
					<h1 class="text-xl font-bold text-gray-700 md:text-2xl">Jobs</h1>
				</div>

				<div class="mt-6">
					<div class="max-w-4xl py-6 mx-auto text-center">
						<router-link
							v-if="meta.current_page > 1"
							:to="{ name: 'Home', query: { page: meta.current_page -= 1 } }"
							class="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md shadow cursor-not-allowed"
						>Previous</router-link>
						<a
							v-else
							class="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md shadow cursor-not-allowed"
						>Previous</a>

						<router-link
							:to="{ name: 'Home', query: { page: meta.current_page += 1 } }"
							class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md shadow hover:bg-blue-500 hover:text-white"
						>Next</router-link>
					</div>
				</div>

				<div v-for="job in jobs" :key="job.slug">
					<JobItem :job="job" />
				</div>

				<div class="mt-6">
					<div class="max-w-4xl py-6 mx-auto text-center">
						<router-link
							:to="{ name: 'Home', query: { page: meta.current_page -- } }"
							class="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md shadow cursor-not-allowed"
						>Previous</router-link>

						<router-link
							:to="{ name: 'Home', query: { page: meta.current_page ++ } }"
							class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md shadow hover:bg-blue-500 hover:text-white"
						>Next</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>