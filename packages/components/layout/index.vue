<template>
	<component v-bind="$attrs" :is="computedLayout" class="jlg-layout-container">
		<template v-for="(item, key, index) in $slots" :key="index" v-slot:[key]>
			<slot :name="key"></slot>
		</template>
	</component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useGlobalConfig } from '../../hooks/useGlobalConfig'
import vertical from './components/container/vertical.vue'
import horizontal from './components/container/horizontal.vue'
console.log(useGlobalConfig())

let props = defineProps({
	layout: {
		type: String,
		default: 'vertical'
	}
})
type ComponentLayout = typeof vertical | typeof horizontal | string
let computedLayout = computed<ComponentLayout>(() => {
	switch (props.layout) {
		case 'vertical':
			return vertical
		case 'horizontal':
			return horizontal
		default:
			return 'div'
	}
})
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'JlgLayout'
})
</script>

<style lang="scss" scoped></style>
