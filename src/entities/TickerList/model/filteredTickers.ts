import { useFilter } from '@/shared/lib/use';
import { computed } from 'vue';
import { useTickerStore } from './stores';

export const filteredTickers = computed(() => {
	const tickerStore = useTickerStore();
	if (!tickerStore.filter) {
		return tickerStore.list;
	}

	return useFilter(tickerStore.list, tickerStore.filter, 'name');
});
