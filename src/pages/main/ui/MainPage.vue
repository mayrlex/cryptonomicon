<script setup lang="ts">
import { filteredTickers, loadSavedTickers } from '@/entities/TickerList';
import { ControlPanel } from '@/widgets/ControlPanel';
import { PriceChart } from '@/widgets/PriceChart';
import { TickerList } from '@/widgets/TickerList';
import { onMounted } from 'vue';

onMounted(() => {
	loadSavedTickers();
});
</script>

<template>
	<div class="h-screen items-start overflow-x-hidden bg-slate-50">
		<div class="max-w-5xl mx-auto">
			<ControlPanel />

			<section class="mx-auto grid w-full gap-y-8 px-4">
				<h1 class="text-2xl font-medium text-slate-800">Your tickers:</h1>
				<TickerList :tickers="filteredTickers" />
				<PriceChart />
			</section>
		</div>
	</div>
</template>
