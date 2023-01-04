<template>
	<vue-dynamic-modal @hide="handleModalHide">modal_b</vue-dynamic-modal>
</template>

<script lang="ts" setup>
import VueDynamicModal from '../../../packages/components/dynamicModal/vueDynamicModal.vue'
const handleModalHide = () => {
  console.log('触发了hide')
}
</script>

<style scoped></style>
