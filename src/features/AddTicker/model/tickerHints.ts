import { useTickerStore } from '@/entities/TickerList';
import { computed, ref } from 'vue';
import getCoins from '../api/getCoins.js';

const MAX_COINS_PER_VIEW = 4;
const coins = ref<string[]>([]);

getCoins.then(response => {
	coins.value = response;
});

const tickerHints = computed(() => {
	const tickerStore = useTickerStore();
	if (!tickerStore.ticker) return;

	const _ticker = tickerStore.ticker.toLowerCase();

	const matchedCoins = coins.value.filter(coin => {
		return coin.toLowerCase().indexOf(_ticker) !== -1;
	});

	const coinList = matchedCoins.slice(0, MAX_COINS_PER_VIEW);

	if (!coinList.length) return;

	return coinList;
});

export { tickerHints };
