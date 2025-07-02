<script setup lang="ts">
import { IconBackspace } from '@/shared/ui/icons';
import { VButton } from '@/shared/ui/VButton';
import { removeTicker } from '../model';

const props = defineProps({
	ticker: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<VButton
		variant="secondary"
		:aria-label="`Remove ticker ${props.ticker} from list`"
		@click.stop="removeTicker(props.ticker)"
	>
		<IconBackspace :size="24" />
	</VButton>
</template>
