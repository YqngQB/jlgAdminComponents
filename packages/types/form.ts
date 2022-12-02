import { FormInstance } from 'element-plus'

export declare interface JlgFormInstance extends FormInstance {
	submit: (validateErrorText?: string) => Promise<any>
}

export declare type RulesType = string | Array<string | Record<string, any>>
