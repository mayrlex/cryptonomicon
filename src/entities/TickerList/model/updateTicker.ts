import { usePriceChartStore } from '@/entities/PriceChart';
import { useTickerStore } from './stores';

export const updateTicker = (tickerName: string, tickerPrice: number) => {
	const tickerChartStore = usePriceChartStore();
	const tickerStore = useTickerStore();

	const [currentTicker] = tickerStore.list.filter(ticker => ticker.name === tickerName);
	currentTicker.price = tickerPrice;

	if (currentTicker.name === tickerStore.selectedTicker) {
		tickerChartStore.updateChartData(tickerPrice);
	}
};
