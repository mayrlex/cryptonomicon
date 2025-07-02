import { subscribeToTicker } from '@/shared/api/CryptoCompare';
import { useTickerStore } from './stores';
import { updateTicker } from './updateTicker';

const loadSavedTickers = () => {
	const tickerStore = useTickerStore();

	if (!tickerStore.list.length) return;

	tickerStore.list.forEach(ticker => {
		subscribeToTicker(ticker.name, newPrice => updateTicker(ticker.name, newPrice));
	});
};

export { loadSavedTickers };
