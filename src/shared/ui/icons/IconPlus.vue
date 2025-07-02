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
			d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
		/>
	</svg>
</template>
