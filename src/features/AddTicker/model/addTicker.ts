import { subscribeToTicker } from '@/shared/api/CryptoCompare';
import { updateTicker, useTickerStore } from '@/entities/TickerList';
import { computed, watch } from 'vue';
import { storeToRefs } from 'pinia';

const addTicker = (tickerName: string) => {
	const tickerStore = useTickerStore();
	const { ticker } = storeToRefs(tickerStore);

	if (!tickerStore.ticker.length) return;

	const currentTicker = {
		name: tickerName.toUpperCase(),
		price: 0,
	};

	const isDuplicate = computed(() => {
		return tickerStore.list.find(ticker => ticker.name === currentTicker.name);
	});

	tickerStore.updateDuplicateFlag(!!isDuplicate.value);

	if (!isDuplicate.value) {
		tickerStore.add(currentTicker);

		subscribeToTicker(currentTicker.name, (newPrice: number) => {
			return updateTicker(currentTicker.name, newPrice);
		});

		tickerStore.clearTickerValue();
	}

	watch(ticker, () => {
		tickerStore.isDuplicate = false;
	});
};

export { addTicker };
