<script setup lang="ts">
const props = defineProps({
	size: {
		type: Number,
		required: false,
		default: 16,
	},

	color: {
		type: String,
		required: false,
		default: 'currentColor',
	},
});
</script>

<template>
	<svg
		:stroke="props.color"
		stroke-width="1.5"
		fill="none"
		:width="props.size"
		:height="props.size"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m8.25 4.5 7.5 7.5-7.5 7.5"
		/>
	</svg>
</template>
