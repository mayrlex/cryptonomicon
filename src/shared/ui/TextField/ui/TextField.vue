<script setup lang="ts">
const props = defineProps({
	label: {
		type: String,
		required: false,
		default: null,
	},

	type: {
		type: String,
		required: false,
		default: 'text',
	},

	name: {
		type: String,
		required: false,
		default: null,
	},

	bind: {
		type: String,
		required: false,
		default: null,
	},

	placeholder: {
		type: String,
		required: false,
		default: null,
	},
});

const modelValue = defineModel<string>({});
</script>

<template>
	<div class="grid gap-1">
		<label
			v-if="props.label"
			class="text-sm font-medium text-slate-700"
			:for="props.bind"
		>
			{{ props.label }}
		</label>

		<input
			:id="props.bind"
			v-model="modelValue"
			:type="props.type"
			:name="props.name"
			:placeholder="props.placeholder"
			class="rounded-md border-slate-300 pr-10 text-slate-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-300 sm:text-sm"
		/>
	</div>
</template>
