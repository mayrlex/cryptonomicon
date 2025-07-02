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
			d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.37-6.38a1.13 1.13 0 0 1 0-1.58l6.37-6.38c.21-.21.5-.33.8-.33h9.28a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.28c-.3 0-.59-.12-.8-.33Z"
		/>
	</svg>
</template>
