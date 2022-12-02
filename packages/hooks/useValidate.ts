import { RulesType } from '../types/form'
import {
	digitValidator,
	emailValidator,
	minValidator,
	maxValidator,
	urlValidatorForm,
	lengthValidator,
	mobileValidator,
	idCardValidator
} from './rules'

export function useRules(rules: RulesType) {
	let result: any[] = []
	if (!rules || rules.length === 0) return []
	if (Array.isArray(rules)) {
		rules.forEach((rule) => {
			if (typeof rule === 'string' && rule) {
				result.push(parseRule(rule))
			} else {
				result.push(rule)
			}
		})
	} else if (typeof rules === 'string' && rules) {
		let ruleArr = rules.split('|')
		// 循环校验规则
		ruleArr.forEach((rule) => {
			result.push(parseRule(rule))
		})
	}
	return result
}

// 解析与匹配校验规则
function parseRule(valStr: string) {
	try {
		const segments = valStr.split(':')
		let str = segments[0] ?? ''
		let parameter = segments[1] ? segments[1].split(',') : []
		switch (str) {
			case 'required':
				// 必填
				return { required: true, message: '必填项不能为空！' }
			case 'mobile':
				// 手机号
				return mobileValidator()
			case 'email':
				// 输入的值是否是一个合理的电子邮件地址。
				return emailValidator()
			case 'number':
				// 输入的值是否为数字。
				return digitValidator()
			case 'integer':
				// 输入的值是否为整数。
				return digitValidator(0)
			case 'min':
				// 输入的值是否大于等于指定的最小值。
				return minValidator(parameter[0], parameter[1] as 'length' | 'value')
			case 'max':
				// 输入的值是否小于等于指定的最大值。
				return maxValidator(parameter[0], parameter[1] as 'length' | 'value')
			case 'length':
				// 输入的值的长度是否符合指定的范围。
				return lengthValidator(parameter[0], parameter[1])
			case 'url':
				// 输入的值是否为 http url。
				return urlValidatorForm()
			case 'idCard':
				// 身份证
				return idCardValidator()
		}
	} catch (e) {}
}
