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
				loading: false
			};
		},
		methods: {
			async getData(page = 1) {
				this.loading = true
				try {
					const {
						data
					} = await this.$http.get("jobs", {
						params: {
							page: page,
						},
					});
					this.jobs = data.data;
					this.meta = data.meta;
					this.links = data.links;
					this.$router.push({
						name: 'Home',
						query: {
							page: page
						}
					}).catch({})
				} catch (error) {
					console.log(error);
				} finally {
					this.loading = false
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
						<a v-if="meta.current_page > 1" @click="getData(meta.current_page -= 1)"
							class="px-3 cursor-pointer py-2 mx-1 font-medium text-gray-700 bg-white rounded-md shadow hover:bg-blue-500 hover:text-white">Previous</a>
						<a v-else
							class="px-3 cursor-pointer py-2 mx-1 font-medium text-gray-500 bg-white rounded-md shadow cursor-not-allowed">Previous</a>

						<a @click="getData(meta.current_page += 1)"
							class="px-3 cursor-pointer py-2 mx-1 font-medium text-gray-700 bg-white rounded-md shadow hover:bg-blue-500 hover:text-white">Next</a>
					</div>
				</div>

				<div v-if="loading" class="border border-blue-300 shadow rounded-md p-4 max-w-4xl w-full mx-auto">
					<div class="animate-pulse flex space-x-4">
						<div class="rounded-full bg-slate-700 h-10 w-10"></div>
						<div class="flex-1 space-y-6 py-1">
							<div class="h-4 bg-slate-700 rounded"></div>
							<div class="space-y-3">
								<div class="grid grid-cols-3 gap-4">
									<div class="h-2 bg-slate-700 rounded col-span-2"></div>
									<div class="h-2 bg-slate-700 rounded col-span-1"></div>
									<div class="h-2 bg-slate-700 rounded col-span-2"></div>
									<div class="h-2 bg-slate-700 rounded col-span-1"></div>
									<div class="h-2 bg-slate-700 rounded col-span-3"></div>
								</div>
								<div class="h-2 bg-slate-700 rounded"></div>
								<div class="h-1 bg-slate-700 rounded"></div>
							</div>
						</div>
					</div>
				</div>


				<template v-else>
					<div v-for="job in jobs" :key="job.slug">
						<JobItem :job="job" />
					</div>
				</template>

				<div class="mt-6">
					<div class="max-w-4xl py-6 mx-auto text-center">
						<a v-if="meta.current_page > 1" @click="getData(meta.current_page -= 1)"
							class="px-3 cursor-pointer py-2 mx-1 font-medium text-gray-700 bg-white rounded-md shadow hover:bg-blue-500 hover:text-white">Previous</a>
						<a v-else
							class="px-3 cursor-pointer py-2 mx-1 font-medium text-gray-500 bg-white rounded-md shadow cursor-not-allowed">Previous</a>

						<a @click="getData(meta.current_page += 1)"
							class="px-3 cursor-pointer py-2 mx-1 font-medium text-gray-700 bg-white rounded-md shadow hover:bg-blue-500 hover:text-white">Next</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>