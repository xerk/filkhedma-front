<script>
	import timeAgo from "@/utils/timeAgo";
	export default {
		props: {
			job: {
				type: Object,
			},
		},
		data() {
			return {
				timeAgo,
			};
		},
		filters: {
			truncate: function (data, num) {
				const reqdString = data.split("").slice(0, num).join("");
				return reqdString;
			},
		},
	};
</script>

<template>
	<div class="mt-6">
		<div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
			<div class="flex items-center justify-between">
				<span class="font-light text-gray-600">{{timeAgo(job.created_at)}}</span>
				<div>
					<span
						v-for="(type, key) in job.job_types"
						:key="key + '-type'"
						class="inline-flex ml-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
					>
						<svg class="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
							<circle cx="4" cy="4" r="3" />
						</svg>
						{{type}}
					</span>
					<span
                        v-if="job.remote"
						class="inline-flex ml-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
					>
						<svg class="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
							<circle cx="4" cy="4" r="3" />
						</svg>
						Remote
					</span>
				</div>
			</div>
			<div class="mt-2">
                <div class="text-gray-400 my-2 font-semibold">Company: {{job.company_name}}</div>
				<a :href="job.url" target="_blank" class="text-2xl font-bold text-gray-700 hover:underline">{{job.title}}</a>
				<p class="mt-2 text-gray-600" v-text="job.description.slice(0, 300).replace(/<\/?[^>]+>/ig, ' ')"></p>
			</div>
			<div class="flex items-center justify-between mt-4">
				<a
					:href="job.url"
					target="_blank"
					:to="{ name: 'job-details', params: { slug: job.slug }}"
					class="text-blue-500 hover:underline"
				>Read more</a>
				<div>
					<span
						v-for="(tag, key) in job.tags"
						:key="key + '-tag'"
						class="inline-flex ml-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
					>{{tag}}</span>
				</div>
			</div>
		</div>
	</div>
</template>