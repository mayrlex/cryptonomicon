<script setup>
import { computed } from 'vue';
import { formatPrice } from '../model';

const props = defineProps({
	name: {
		type: String,
		required: true,
		default: null,
	},

	price: {
		required: true,
		default: null,
	},

	isSelected: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const isValidPrice = computed(() => typeof props.price === 'number');
const defaultState = computed(() => !props.isSelected && isValidPrice.value);
</script>

<template>
	<div
		class="cursor-pointer overflow-hidden rounded-lg shadow"
		:class="{
			'bg-white': defaultState,
			'bg-blue-100': props.isSelected,
			'bg-rose-100': !isValidPrice,
		}"
	>
		<div class="grid gap-y-8 px-4 py-4">
			<span class="text-md truncate font-medium text-slate-500">{{ props.name }}</span>
			<span class="flex items-start gap-2 font-mono text-4xl font-semibold text-slate-800">
				${{ formatPrice(props.price) }}
			</span>
		</div>

		<button
			class="absolute inset-0 flex select-none appearance-none rounded-lg border-transparent transition-colors focus:outline-none focus-visible:border-4 focus-visible:border-blue-300"
			:aria-label="`Select ticker '${props.name}'`"
		></button>

		<slot />
	</div>
</template>
