import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const usePriceChartStore = defineStore('chart', () => {
	const chartBarCount = ref(1);
	const chartWidth = ref(0);
	const chartBarWidth = ref(8);
	const chartBarGap = ref(16);
	const chartContainerPadding = ref(8);
	const chartData = ref<number[]>([]);

	const normalizedChart = computed(() => {
		const minValue = Math.min(...chartData.value);
		const maxValue = Math.max(...chartData.value);

		if (minValue === maxValue) {
			return chartData.value.map(() => 50);
		}

		return chartData.value.map(value => 5 + ((value - minValue) / (maxValue - minValue)) * 95);
	});

	const calcChartBarCount = () => {
		chartBarCount.value = Math.floor(
			(chartWidth.value + chartContainerPadding.value * 2) /
				(chartBarWidth.value + chartBarGap.value),
		);
	};

	const setChartWidth = (width: number) => {
		chartWidth.value = width;
	};

	const updateChartData = (data: number) => {
		if (!data) {
			chartData.value.shift();
			return;
		}

		chartData.value.push(data);
	};

	const clearChartData = () => {
		chartData.value = [];
	};

	return {
		chartBarCount,
		chartWidth,
		chartBarWidth,
		chartBarGap,
		chartContainerPadding,
		chartData,
		normalizedChart,
		calcChartBarCount,
		setChartWidth,
		updateChartData,
		clearChartData,
	};
});
