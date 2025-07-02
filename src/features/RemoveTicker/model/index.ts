import { useTickerStore } from '@/entities/TickerList';
import { unsubscribeFromTicker } from '@/shared/api/CryptoCompare';

const removeTicker = (ticker: string) => {
	const tickerStore = useTickerStore();
	tickerStore.remove(ticker);

	if (ticker === tickerStore.selectedTicker) {
		tickerStore.setSelectedTicker('');
	}

	unsubscribeFromTicker(ticker);
};

export { removeTicker };
