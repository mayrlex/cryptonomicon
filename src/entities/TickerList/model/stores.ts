import { useLocalStorage } from '@/shared/lib/use';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const NAMESPACE = 'cryptonomicon-list';
const localStorage = useLocalStorage();

interface ITicker {
	name: string;
	price: number;
}

const useTickerStore = defineStore('tickers', () => {
	const ticker = ref('');
	const list = ref<ITicker[]>(localStorage.get(NAMESPACE));
	const isDuplicate = ref(false);
	const selectedTicker = ref('');
	const limit = ref(6);
	const filter = ref('');

	const add = (ticker: ITicker): void => {
		list.value.push(ticker);

		localStorage.update(NAMESPACE, list.value);
	};

	const remove = (tickerName: string): void => {
		const newList = list.value.filter(item => item.name !== tickerName);

		list.value = newList;

		localStorage.update(NAMESPACE, list.value);
	};

	const clearTickerValue = (): void => {
		ticker.value = '';
	};

	const updateDuplicateFlag = (value: boolean): void => {
		isDuplicate.value = value;
	};

	const setSelectedTicker = (ticker: string): void => {
		selectedTicker.value = ticker;
	};

	return {
		ticker,
		list,
		isDuplicate,
		selectedTicker,
		limit,
		filter,
		add,
		remove,
		clearTickerValue,
		updateDuplicateFlag,
		setSelectedTicker,
	};
});

export { useTickerStore };
