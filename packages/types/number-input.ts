import { InputInstance } from 'element-plus'
import { SetupContext, RenderFunction, ComponentPublicInstance } from 'vue'
import { ValueOf, InputBasicProps } from './component'

export type JlgNumberInputInstance = ComponentPublicInstance<
    {
        /**
         * el-input 实例
         */
        epRef: InputInstance
    },
    JlgNumberInputConstructor
    >

export interface JlgNumberInputConstructor extends JlgNumberInputMethods {
    props: JlgNumberInputProps
    context: SetupContext<JlgNumberInputEmits>
    renderVN: RenderFunction
}

interface NumberInputProps extends Partial<InputInstance['props']>{
    /**
     * 设置最大值
     */
    max?: number
    /**
     * 设置最小值
     */
    min?: number
    /**
     * 设置精度（小数位数，四舍五入）
     */
    precision?: number
}
export type JlgNumberInputProps = InputBasicProps | NumberInputProps

export interface NumberInputMethods {
    dispatchEvent(
        type: ValueOf<JlgNumberInputEmits>,
        params: unknown,
        event: Event
    ): void
}
export interface JlgNumberInputMethods extends NumberInputMethods {}

export type JlgNumberInputEmits = [
    'change',
    'focus',
    'blur',
    'input',
    'clear'
]
