<template>
	<jlg-layout class="layout-container-demo" asideWidth="210px" @change="()=>{}">
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
      <pure-table :data="[]" ></pure-table>
      <el-table :data="[]"></el-table>
    </template>
		<template #footer>footer</template>
	</jlg-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const nestedRouter = {
	path: '/nested',
	meta: {
		title: '多级菜单',
		rank: 8
	},
	children: [
		{
			path: '/nested/menu1',
			meta: {
				title: '菜单1'
			},
			children: [
				{
					path: '/nested/menu1/menu1-1/index',
					name: 'Menu1-1',
					meta: {
						title: '菜单1-1'
					}
				},
				{
					path: '/nested/menu1/menu1-2',
					meta: {
						title: '菜单1-2'
					},
					children: [
						{
							path: '/nested/menu1/menu1-2/menu1-2-1',
							name: 'Menu1-2-1',
							meta: {
								title: '菜单1-2-1',
								showParent: true
							}
						}
					]
				}
			]
		}
	]
}
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
