function useInjectModel(injectModel: any, props: any) {
	function getMultistagePropValue(propArr: Array<string>) {
		try {
			let value = injectModel
			for (let i = 0; i < propArr.length; i++) {
				if (value[propArr[i]] === undefined) {
					throw new Error(`model 中的字段 ${propArr[i]}不能是 undefined！`)
				}
				value = value[propArr[i]]
			}
			return value
		} catch (e) {
			console.warn('[jlg-form]', e)
			return undefined
		}
	}

	let getInjectModelField = () => {
		if (!props.prop || !injectModel) return null
		if (typeof props.prop === 'string' && props.prop.indexOf('.') > -1) {
			// 多级属性
			let propArr = props.prop.split('.')
			return getMultistagePropValue(propArr)
		} else if (Array.isArray(props.prop)) {
			// 数组
			return getMultistagePropValue(props.prop)
		} else if (typeof props.prop === 'string') {
			// 字符串(单级属性)
			return injectModel[props.prop]
		}
	}

	let setInjectModelField = (newValue: any) => {
		if (
			(typeof props.prop === 'string' && props.prop.indexOf('.') > -1) ||
			Array.isArray(props.prop)
		) {
			let propArr =
				typeof props.prop === 'string' ? props.prop.split('.') : props.prop
			try {
				if (propArr.length > 1) {
					let value = injectModel
					for (let i = 0; i < propArr.length - 1; i++) {
						if (!propArr[i]) {
							throw new Error('传递的prop字段格式错误，请自行检查')
							return
						}
						if (
							!value[propArr[i]] ||
							!(typeof value[propArr[i]] === 'object')
						) {
							value[propArr[i]] = {}
						}
						value = value[propArr[i]]
					}
					value[propArr[propArr.length - 1]] = newValue
				} else {
					propArr[0] ? (injectModel[propArr[0]] = newValue) : ''
				}
			} catch (e) {
				console.error(e)
			}
		} else if (props.prop && typeof props.prop === 'string') {
			injectModel[props.prop as string] = newValue
		}
	}
	return {
		getInjectModelField,
		setInjectModelField
	}
}

export default useInjectModel
