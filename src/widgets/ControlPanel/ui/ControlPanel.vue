<script setup lang="ts">
import { useTickerStore } from '@/entities/TickerList';
import { AddTicker } from '@/features/AddTicker';
import { TextField } from '@/shared/ui/TextField';

const tickerStore = useTickerStore();
</script>

<template>
	<div class="mx-auto grid items-start grid-cols-3 gap-4 bg-slate-50 p-4">
		<AddTicker />

		<div class="grid gap-4 col-start-3">
			<TextField
				v-model="tickerStore.filter"
				label="Find ticker"
				name="filter"
				bind="filter"
			/>
		</div>

		<hr class="border border-slate-200 col-span-full" />
	</div>
</template>
