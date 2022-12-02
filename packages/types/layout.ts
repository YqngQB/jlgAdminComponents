import { SetupContext, RenderFunction, ComponentPublicInstance } from 'vue'
import { ValueOf } from './component'

export type JlgLayoutInstance = ComponentPublicInstance<
	JlgLayoutProps,
	JlgLayoutConstructor
>

export interface JlgLayoutConstructor extends JlgLayoutMethods {
	props: JlgLayoutProps
	context: SetupContext<JlgLayoutEmits>
	renderVN: RenderFunction
}

/**
 * @description 组件 - 布局组件配置项
 */
export type JlgLayoutProps = {
	/**
	 * 顶部栏高度
	 */
	headerHeight?: string
	/**
	 * 顶部栏是否显示
	 */
	showHeader?: boolean
	/**
	 * 侧边栏宽度
	 */
	asideWidth?: string
	/**
	 * 侧边栏是否显示
	 */
	showAside?: boolean
	/**
	 * 底部区域高度
	 */
	footerHeight?: string
	/**
	 * 底部区域是否显示
	 */
	showFooter?: boolean
}

export interface LayoutMethods {
	dispatchEvent(
		type: ValueOf<JlgLayoutEmits>,
		params: unknown,
		event: Event
	): void
}
export interface JlgLayoutMethods extends LayoutMethods {}

export type JlgLayoutEmits = []
