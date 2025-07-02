<script setup lang="ts">
import { useTickerStore } from '@/entities/TickerList';
import { TextField } from '@/shared/ui/TextField';
import { VButton } from '@/shared/ui/VButton';
import { VChip } from '@/shared/ui/VChip';
import { IconPlus } from '@/shared/ui/icons';
import { addTicker, tickerHints } from '../model';

const tickerStore = useTickerStore();
</script>

<template>
	<section class="grid gap-4">
		<div class="flex gap-4 items-end">
			<TextField
				v-model="tickerStore.ticker"
				label="Add new ticker"
				type="text"
				name="wallet"
				bind="wallet"
				placeholder="Example DOGE"
				class="w-full"
				@keydown.enter="addTicker(tickerStore.ticker)"
			/>

			<VButton
				variant="primary"
				@click="addTicker(tickerStore.ticker)"
			>
				<IconPlus :size="24" />
			</VButton>
		</div>

		<div
			v-if="tickerHints"
			class="flex flex-wrap rounded-md bg-white p-1 shadow-md"
		>
			<VChip
				v-for="coin in tickerHints"
				:key="coin"
				@click="addTicker(coin)"
			>
				{{ coin }}
			</VChip>
		</div>

		<span
			v-if="tickerStore.isDuplicate"
			class="mt-2 flex text-sm text-red-600"
		>
			This ticker has already been added
		</span>
	</section>
</template>
