import { InternalRuleItem, Value } from 'async-validator/dist-types/interface'

/**
 * 判断输入框输入的值是否为数字
 * @param {string} value
 */
const isNumber = (value: any) => {
	return !isNaN(value)
}

/**
 * 限制输入框只能输入指定位数的小数
 * @param {number} digit 小数位数，如果不填写就只限制是否是数字
 */
export const digitValidator = (digit: number | null = null) => {
	return {
		validator: (
			rule: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			if (!!value && !isNumber(value)) {
				callback(new Error('只能输入数字'))
			} else if (
				digit !== 0 &&
				digit !== null &&
				value &&
				value.toString().split('.')[1]?.length > digit
			) {
				callback(new Error(`最多输入${digit}位小数`))
			} else if (
				digit === 0 &&
				value &&
				value.toString().split('.')[1]?.length > digit
			) {
				callback(new Error(`只能输入整数`))
			} else {
				callback()
			}
		}
	}
}

/**
 * 输入的值是否为 http url
 */
export const urlValidatorForm = (stack = []) => {
	return {
		validator: (
			rule: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			try {
				const protocols = stack.length ? stack : ['http:', 'https:']
				const url = new URL(String(value))
				if (!protocols.includes(url.protocol)) {
					callback('请输入正确的 URL')
				} else {
					callback()
				}
			} catch {
				return callback('请输入正确的 URL')
			}
		}
	}
}

/**
 * 输入的值是否为 http url
 */
export const urlValidator = (stack = []) => {
	return {
		validator: (
			rule: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			try {
				const protocols = stack.length ? stack : ['http:', 'https:']
				const url = new URL(String(value))
				if (!protocols.includes(url.protocol)) {
					callback('请输入正确的 URL')
				} else {
					callback()
				}
			} catch {
				return callback('请输入正确的 URL')
			}
		}
	}
}

/**
 * 输入的值是否是一个合理的电子邮件地址。
 */
export const emailValidator = () => {
	return {
		validator: (
			rule: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			// 不做必填校验
			if (!value) return callback()
			const isEmail =
				/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
			return callback(
				!isEmail.test(String(value)) ? '请输入正确的邮箱' : undefined
			)
		}
	}
}

/**
 * 判断值长度是否为为指定值之间，输入数字会转换为字符串后计算长度
 * @param min 最小长度
 * @param max 最大长度
 */
export const lengthValidator = (
	min: number | string,
	max?: number | string
) => {
	console.log('lengthValidator', min, max)
	if (min === max) {
		return {
			min: parseInt(String(min)),
			max: parseInt(String(max)),
			message: `长度必须等于 ${min} 个字符`
		}
	} else if (min && max) {
		return {
			min: parseInt(String(min)),
			max: parseInt(String(max)),
			message: `长度必须在 ${min} 到 ${max} 个字符之间`
		}
	} else if (min) {
		return {
			min: parseInt(String(min)),
			message: `长度必须大于 ${min} 个字符`
		}
	} else if (max) {
		return {
			max: parseInt(String(max)),
			message: `长度必须小于 ${max} 个字符`
		}
	}
}

/**
 * 输入的值是否小于最大值
 */
export const maxValidator = (
	maximum: number | string | Array<any> = 99,
	force?: 'length' | 'value'
) => {
	return {
		validator: (
			rule: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			if (Array.isArray(value)) {
				maximum = !isNaN(maximum as any) ? Number(maximum) : maximum
				return value.length <= maximum
					? callback()
					: callback(`最多选择 ${maximum} 项`)
			}
			if ((!isNaN(value) && force !== 'length') || force === 'value') {
				value = !isNaN(value) ? Number(value) : value
				return value <= maximum ? callback() : callback(`最大值为 ${maximum}`)
			}
			if (typeof value === 'string' || force === 'length') {
				value = !isNaN(value) ? value.toString() : value
				return value.length <= maximum
					? callback()
					: callback(`最大长度为 ${maximum}`)
			}
		}
	}
}

/**
 * 输入的值是否大于最小值。
 */
export const minValidator = (
	minimum: number | string | Array<any> = 1,
	force?: 'length' | 'value'
) => {
	return {
		validator: (
			rule: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			if (Array.isArray(value)) {
				minimum = !isNaN(minimum as any) ? Number(minimum) : minimum
				return value.length >= minimum
					? callback()
					: callback(`至少选择${minimum}项`)
			}
			if ((!isNaN(value) && force !== 'length') || force === 'value') {
				value = !isNaN(value) ? Number(value) : value
				return value >= minimum ? callback() : callback(`最小值为${minimum}`)
			}
			if (typeof value === 'string' || force === 'length') {
				value = !isNaN(value) ? value.toString() : value
				return value.length >= minimum
					? callback()
					: callback(`最小长度为${minimum}`)
			}
		}
	}
}

/**
 * 手机号码校验
 */
export const mobileValidator = () => {
	return {
		validator: (
			rule: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			// 不做必填校验
			if (!value) return callback()
			// 宽松匹配，只要是13,14,15,16,17,18,19开头的11位数字就行
			const isMobile = /^1[3456789]\d{9}$/
			return callback(
				!isMobile.test(String(value)) ? '请输入正确的手机号码' : undefined
			)
		}
	}
}

/**
 * 身份证号码校验
 * 支持一代身份证和二代身份证
 * */
export const idCardValidator = (mandatory = false) => {
	return {
		validator: (
			rule: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			if (mandatory && !value && value !== 0) {
				callback()
			} else {
				const isIdCard =
					/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
				return callback(
					!isIdCard.test(String(value)) ? '请输入正确的身份证号码' : undefined
				)
			}
		}
	}
}
