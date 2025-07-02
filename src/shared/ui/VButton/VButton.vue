<script setup lang="ts">
const props = defineProps({
	variant: {
		type: String,
		required: true,
		default: null,
	},
});
</script>

<template>
	<button
		type="button"
		class="flex select-none appearance-none items-center justify-center border-transparent transition-colors focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
		:class="{
			'gap-2 rounded-md bg-blue-600 px-4 py-2 text-base font-medium leading-normal text-white shadow-sm hover:bg-blue-700 active:bg-blue-600':props.variant === 'primary', // prettier-ignore
			'rounded-md p-2 text-slate-500 hover:text-slate-400': props.variant === 'secondary',
		}"
	>
		<slot />
	</button>
</template>
