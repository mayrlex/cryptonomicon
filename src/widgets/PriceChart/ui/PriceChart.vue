<script setup lang="ts">
import { usePriceChartStore } from '@/entities/PriceChart';
import { useTickerStore } from '@/entities/TickerList';
import { VButton } from '@/shared/ui/VButton';
import { IconChevron, IconCross } from '@/shared/ui/icons';
import { storeToRefs } from 'pinia';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const tickerStore = useTickerStore();
const tickerChartStore = usePriceChartStore();
const { selectedTicker } = storeToRefs(tickerStore);
const chartContainer = ref(null);

tickerChartStore.$subscribe((mutation, state) => {
	if (state.chartData.length > state.chartBarCount) {
		tickerChartStore.updateChartData();
	}
});

const calcChartBarProps = () => {
	const newCalc = computed(() => chartContainer.value?.clientWidth);
	tickerChartStore.setChartWidth(newCalc.value);
	tickerChartStore.calcChartBarCount();
};

watch(selectedTicker, () => {
	if (selectedTicker.value) {
		nextTick().then(() => calcChartBarProps());
	}

	tickerChartStore.clearChartData();
});

onMounted(() => window.addEventListener('resize', calcChartBarProps));
onBeforeUnmount(() => window.removeEventListener('resize', calcChartBarProps));
</script>

<template>
	<section
		v-if="selectedTicker"
		class="grid gap-4 rounded-md border border-slate-200 bg-white p-4 shadow-sm"
	>
		<div class="flex items-center justify-between">
			<h3 class="flex items-center gap-1 text-xl font-medium leading-6 text-slate-800">
				<span>{{ selectedTicker }}</span>

				<IconChevron class="text-slate-600" />

				<span>USD</span>
			</h3>

			<VButton
				variant="secondary"
				:aria-label="`Close chart`"
				@click.stop="tickerStore.setSelectedTicker('')"
			>
				<IconCross :size="24" />
			</VButton>
		</div>

		<div
			ref="chartContainer"
			class="flex h-64 max-w-full items-end gap-x-4 border-b border-slate-300"
		>
			<div
				v-for="(col, index) in tickerChartStore.normalizedChart"
				:key="index"
				:style="{
					height: `${col}px`,
				}"
				class="basis-2 rounded-t-md bg-blue-600"
			></div>
		</div>
	</section>
</template>
