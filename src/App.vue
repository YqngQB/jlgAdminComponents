<template>
	<jlg-layout ref="layoutRef" class="layout-container-demo" asideWidth="210px">
		<template #aside>
			<div style="height: 60px; background: aquamarine">
				<sapn>这是logo</sapn>
			</div>
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<el-menu router unique-opened mode="vertical">
					<el-sub-menu index="1">
						<template #title>
							<el-icon><message /></el-icon>
							Navigator One
						</template>
						<el-menu-item-group>
							<template #title>Group 1</template>
							<el-menu-item index="1-1">Option 1</el-menu-item>
							<el-menu-item index="1-2">Option 2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="Group 2">
							<el-menu-item index="1-3">Option 3</el-menu-item>
						</el-menu-item-group>
						<el-sub-menu index="1-4">
							<template #title>Option4</template>
							<el-menu-item index="1-4-1">Option 4-1</el-menu-item>
						</el-sub-menu>
					</el-sub-menu>
					<el-sub-menu index="2">
						<template #title>
							<el-icon><icon-menu /></el-icon>
							Navigator Two
						</template>
						<el-menu-item-group>
							<template #title>Group 1</template>
							<el-menu-item index="2-1">Option 1</el-menu-item>
							<el-menu-item index="2-2">Option 2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="Group 2">
							<el-menu-item index="2-3">Option 3</el-menu-item>
						</el-menu-item-group>
						<el-sub-menu index="2-4">
							<template #title>Option 4</template>
							<el-menu-item index="2-4-1">Option 4-1</el-menu-item>
						</el-sub-menu>
					</el-sub-menu>
					<el-sub-menu index="3">
						<template #title>
							<el-icon><setting /></el-icon>
							Navigator Three
						</template>
						<el-menu-item-group>
							<template #title>Group 1</template>
							<el-menu-item index="3-1">Option 1</el-menu-item>
							<el-menu-item index="3-2">Option 2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="Group 2">
							<el-menu-item index="3-3">Option 3</el-menu-item>
						</el-menu-item-group>
						<el-sub-menu index="3-4">
							<template #title>Option 4</template>
							<el-menu-item index="3-4-1">Option 4-1</el-menu-item>
						</el-sub-menu>
					</el-sub-menu>
				</el-menu>
			</el-scrollbar>
		</template>
		<template #header>header</template>
		<template #main>
			<jlg-form :model="formData" ref="formRef">
				<jlg-input
					label="输入框"
					prop="name"
					rules="required|email"
					type="textarea"
					:disabled="false"
					:readonly="true"
					:formItemConfig="{ labelWidth: '100px' }"
					tabindex="1"
					:validateEvent="true"
					id="1"
					:clearable="true"
					:autosize="{ minRows: 2, maxRows: 4 }"
					autocomplete="autocomplete"
					:show-password="true"
					:show-word-limit="false"
					:input-style="{ color: 'red' }"
				></jlg-input>
				<jlg-number-input
					:min="10"
					:max="20"
					placeholder="placeholder"
					:autosize="true"
				></jlg-number-input>
			</jlg-form>
			<pre>{{ formData }}</pre>
			<div>
				<pure-table></pure-table>
			</div>
		</template>
		<template #footer>footer</template>
	</jlg-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { JlgLayoutInstance } from 'jlg-admin-components'
import type { JlgFormInstance } from '../packages'
let layoutRef = ref<JlgLayoutInstance>()
let formRef = ref<JlgFormInstance>()
formRef.value?.submit().then((res) => {
	console.log(res)
})

let formData = ref({
	name: 'jlg',
	age: 18
})

const columns = [
	{
		label: 'Date',
		prop: 'date'
	},
	{
		label: 'Name',
		prop: 'name'
	},
	{
		label: 'Address',
		prop: 'address'
	}
]
const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	}
]
</script>

<style lang="scss">
.scrollbar-wrapper {
	height: calc(100% - 60px);
}
.layout-container-demo .el-header {
	position: relative;
	background-color: var(--el-color-primary-light-7);
}
.layout-container-demo .el-aside {
	background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
	border-right: none;
}
.layout-container-demo .el-main {
	padding: 0;
}
.layout-container-demo .el-footer {
	background: #366695;
}
</style>
