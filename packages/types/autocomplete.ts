import { AutocompleteInstance } from 'element-plus'
import { SetupContext, RenderFunction, ComponentPublicInstance } from 'vue'
import { ValueOf, InputBasicProps } from './component'

export type JlgAutocompleteInstance = ComponentPublicInstance<
    {
        /**
         * Autocomplete 实例
         */
        epRef: AutocompleteInstance
    },
    JlgAutocompleteConstructor
    >

export interface JlgAutocompleteConstructor extends JlgAutocompleteMethods {
    props: JlgAutocompleteProps
    context: SetupContext<JlgAutocompleteEmits>
    renderVN: RenderFunction
}

/**
 * @description 组件 - 表单组件配置项
 */
export type JlgAutocompleteProps = InputBasicProps | Partial<AutocompleteInstance['props']>

export interface AutocompleteMethods {
    dispatchEvent(
        type: ValueOf<JlgAutocompleteEmits>,
        params: unknown,
        event: Event
    ): void
}
export interface JlgAutocompleteMethods extends AutocompleteMethods {}

export type JlgAutocompleteEmits = ['change', 'select']
