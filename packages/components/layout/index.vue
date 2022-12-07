<template>
	<component v-bind="$attrs" :is="computedLayout" class="jlg-layout-container" :key="computedLayout">
		<template v-for="(item, key, index) in $slots" :key="index" v-slot:[key]>
			<slot :name="key"></slot>
		</template>
	</component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import { useGlobalConfig } from '../../hooks/useGlobalConfig'
import vertical from './components/container/vertical.vue'
import horizontal from './components/container/horizontal.vue'
// console.log(useGlobalConfig())

let props = defineProps({
  mode: {
		type: String,
		default: 'vertical'
	}
})

let computedLayout = computed<any>(() => {
	switch (props.mode) {
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
  name: 'JlgLayout',
  inheritAttrs: false
})
</script>

<style lang="scss" scoped></style>
