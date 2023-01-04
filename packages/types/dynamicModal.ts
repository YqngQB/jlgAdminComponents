import type {
	Component,
	ComponentPublicInstance,
	ObjectEmitsOptions
} from 'vue'

export type ComponentProps = ComponentPublicInstance['$props']

export type ModalKey = string | symbol

export type UseModalOptionsPrivate<
	ModalProps extends ComponentProps = {
		/**
		 * 窗口的标题
		 * */
		title?: string
		/**
		 * 窗口的宽度
		 */
		width?: string | number
		/**
		 * 窗口的高度
		 */
		height?: string | number
		/**
		 * 窗口的最小宽度
		 */
		minWidth?: string | number
		/**
		 * 窗口的最小高度
		 */
		minHeight?: string | number
		/**
		 * 窗口的最大宽度
		 */
		maxWidth?: string | number
		/**
		 * 是否显示遮罩层
		 * */
		mask?: boolean
		/**
		 * 是否允许点击遮罩层隐藏窗口
		 * */
		maskClosable?: boolean
		/**
		 * 是否允许按 Esc 键隐藏窗口
		 */
		escClosable?: boolean
		/**
		 * 是否锁住页面，不允许窗口之外的任何操作,默认 false
		 */
		lockView?: boolean
		/**
		 * 是否标显示最大化与还原按钮
		 */
		showZoom?: boolean
		/**
		 * 确认按钮的文本
		 * */
		confirmButtonText?: string
		/**
		 * 取消按钮的文本
		 */
		cancelButtonText?: string
		/**
		 * 在窗口隐藏（最小化）之前执行，可以返回 Error 阻止关闭，支持异步
		 */
		beforeHideMethod?: () => Error | Promise<any>
		/**
		 * 在窗口关闭（销毁）之前执行，可以返回 Error 阻止关闭，支持异步
		 */
		beforeCloseMethod?: () => Error | Promise<any>
	},
	ModalEmits extends ObjectEmitsOptions = {}
> = {
	name: ModalKey
	id?: ModalKey
	component?: Component
	bind?: ModalProps
	on?: ModalEmits
	modelValue?: boolean
}
