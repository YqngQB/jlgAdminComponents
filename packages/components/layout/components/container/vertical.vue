<template>
	<el-container class="jlg-layout-container">
		<!--    侧边菜单栏    -->
		<el-aside :width="props.asideWidth" v-if="props.showAside">
			<slot name="aside"></slot>
		</el-aside>

		<el-container>
			<!--    顶部插槽    -->
			<el-header :height="props.headerHeight" v-if="props.showHeader">
				<slot name="header"></slot>
			</el-header>

			<!--					内容区域-->
			<el-main>
				<el-scrollbar>
					<slot name="main"></slot>
				</el-scrollbar>
			</el-main>

			<!--   底部区域     -->
			<el-footer :height="props.footerHeight" v-if="props.showFooter">
				<slot name="footer"></slot>
			</el-footer>
		</el-container>
	</el-container>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import defaultProps from './props'

let props = defineProps(defaultProps)
</script>

<style lang="scss" scoped></style>
