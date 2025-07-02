<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
	current: number;
	total: number;
	limit: number;
}

const props = defineProps<IProps>();

const prevPage = computed(() => props.current - 1);
const nextPage = computed(() => props.current + 1);
const totalPages = computed(() => Math.ceil(props.total / props.limit));

const isFirstPage = computed(() => props.current === 1);
const isLastPage = computed(() => props.current === totalPages.value);
</script>

<template>
	<div class="grid gap-4">
		<div class="flex gap-2 items-center">
			<component
				:is="!isFirstPage ? 'RouterLink' : 'span'"
				:to="{ name: 'main', query: { page: prevPage } }"
				class="flex select-none appearance-none items-center justify-center border-transparent transition-colors focus:outline-none focus-visible:ring focus-visible:ring-blue-300 gap-2 rounded-full bg-blue-600 px-4 py-2 text-base font-medium leading-normal text-white shadow-sm hover:bg-blue-700 active:bg-blue-600 whitespace-nowrap"
				:disabled="isLastPage"
			>
				Prev page
			</component>

			<div class="flex items-center gap-1 font-mono text-slate-600">
				<span>{{ props.current }}</span>
				<span class="text-slate-400">/</span>
				<span>{{ totalPages }}</span>
			</div>

			<component
				:is="!isLastPage ? 'RouterLink' : 'span'"
				:to="{ name: 'main', query: { page: nextPage } }"
				class="flex select-none appearance-none items-center justify-center border-transparent transition-colors focus:outline-none focus-visible:ring focus-visible:ring-blue-300 gap-2 rounded-full bg-blue-600 px-4 py-2 text-base font-medium leading-normal text-white shadow-sm hover:bg-blue-700 active:bg-blue-600 whitespace-nowrap"
				:disabled="isLastPage"
			>
				Next page
			</component>
		</div>
	</div>
</template>
