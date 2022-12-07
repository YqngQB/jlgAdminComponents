# Modal

Modal弹窗

## 基础用法

使用 `aside`、`header`、`round`、`footer` 和 `main` 插槽来定义显示的内容。

:::demo

```vue
<template>
	点击切换布局：
	<el-switch v-model="isVertical" active-text="vertical" inactive-text="horizontal" />
	<jlg-layout
		:mode="isVertical ? 'vertical' : 'horizontal'"
		ref="layoutRef"
		class="layout-container-demo"
		asideWidth="210px"
	>
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
		<template #main>main</template>
		<template #footer>footer</template>
	</jlg-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let layoutRef = ref<any>()
let isVertical = ref<boolean>(false)
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
```

:::

## API

### Props

| 属性名          | 说明             | 类型    | 可选值              | 默认值  |
|--------------| ---------------- | ------- | ------------------- | ------- |
| layout       | 布局类型         | string  | vertical/horizontal | '60px'  |
| headerHeight | 顶部栏高度       | string  |                     | '60px'  |
| showHeader   | 顶部栏是否显示   | boolean | true/false          | true    |
| asideWidth   | 侧边栏宽度       | string  |                     | '200px' |
| showAside    | 侧边栏是否显示   | boolean | true/false          | true    |
| footerHeight | 底部区域高度     | string  |                     | '60px'  |
| showFooter   | 底部区域是否显示 | boolean | true/false          | true    |

<!-- The header of the table can be configured -->
<!--
  The type support TypeScript writing, but in order to generate better code hints, there are some requirements for reference types
  recommend: `VNode[]`, `VNode[] / Array<string>`
  not recommend: `Array<VNode>`, `Array<VNode \| string>`
 -->

### Events

| 事件名 | 说明 |
| ------ | ---- |
|        |      |

### Slots

| 插槽名 | 说明             | 类型 | Subtags |
| ------ | ---------------- | ---- | ------- |
| aside  | 侧边栏内容插槽   |      |         |
| header | 顶部内容插槽     |      |         |
| main   | 主要内容区域插槽 |      |         |
| footer | 底部内容插槽     |      |         |

### Directives

| Name | Description | Type |
| ---- | ----------- | ---- |
|      |             |      |
