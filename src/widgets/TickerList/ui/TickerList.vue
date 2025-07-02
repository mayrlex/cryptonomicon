<script setup lang="ts">
import TickerCard from '@/entities/TickerCard';
import { useTickerStore } from '@/entities/TickerList';
import { VPagging } from '@/features/VPagging';
import { RemoveTicker } from '@/features/RemoveTicker';
import type { ITicker } from '@/shared/lib/types';
import EmptyTickerList from '@/shared/ui/EmptyTickerList/EmptyTickerList.vue';
import { storeToRefs } from 'pinia';
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface IProps {
	tickers: ITicker[];
}

const props = defineProps<IProps>();

const tickerStore = useTickerStore();
const route = useRoute();
const router = useRouter();
const { filter } = storeToRefs(tickerStore);

const selectTicker = (ticker: string): void => {
	tickerStore.setSelectedTicker(ticker);
};

const currentPage = computed(() => {
	return Number(route.query.page) || 1;
});

const paginatedTickers = computed(() => {
	const start = (currentPage.value - 1) * tickerStore.limit;
	const end = start + tickerStore.limit;

	return props.tickers.slice(start, end);
});

watch(filter, () => {
	router.push({ query: { page: 1, filter: filter.value } });
});
</script>

<template>
	<div class="grid gap-y-8">
		<div
			v-if="props.tickers.length"
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
		>
			<TickerCard
				v-for="ticker in paginatedTickers"
				:key="ticker.name"
				:name="ticker.name"
				:price="ticker.price"
				:is-selected="ticker.name === tickerStore.selectedTicker"
				class="relative"
				@click="selectTicker(ticker.name)"
				@keydown.enter="selectTicker(ticker.name)"
			>
				<RemoveTicker
					:ticker="ticker.name"
					class="absolute right-2 top-2"
				/>
			</TickerCard>
		</div>

		<EmptyTickerList v-else />

		<VPagging
			:current="currentPage"
			:total="props.tickers.length"
			:limit="tickerStore.limit"
		/>
	</div>
</template>
