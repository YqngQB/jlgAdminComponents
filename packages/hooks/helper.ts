/**
 * @description is Function
 */
export function isFunction(val: unknown): val is Function {
	return typeof val === 'function'
}

export function isNil(val: unknown): val is null | undefined {
	return val === null || val === undefined
}

export function isUndefined(val: unknown): val is undefined {
	return val === undefined
}

function isType(obj: unknown, type: string): boolean {
	if (typeof obj !== 'object') return false
	// 判断数据类型的经典方法：
	const typeString = Object.prototype.toString.call(obj)
	let flag
	switch (type) {
		case 'Array':
			flag = typeString === '[object Array]'
			break
		case 'Date':
			flag = typeString === '[object Date]'
			break
		case 'RegExp':
			flag = typeString === '[object RegExp]'
			break
		default:
			flag = false
	}
	return flag
}

//获取正则表达式的开关
function getRegExp(re: RegExp): string {
	let flags = '';
	if (re.global) flags += 'g';
	if (re.ignoreCase) flags += 'i';
	if (re.multiline) flags += 'm';
	return flags;
}
export function cloneDeep(parent: unknown): unknown {
	// 维护两个储存循环引用的数组
	const parents = [] as unknown[]
	const children = [] as unknown[]

	const _clone = (parent: any) => {
		if (parent === null) return null
		if (typeof parent !== 'object') return parent

		let child, proto

		if (isType(parent, 'Array')) {
			// 对数组做特殊处理
			child = []
		} else if (isType(parent, 'RegExp')) {
			// 对正则对象做特殊处理
			child = new RegExp(parent.source, getRegExp(parent))
			if (parent.lastIndex) child.lastIndex = parent.lastIndex
		} else if (isType(parent, 'Date')) {
			// 对Date对象做特殊处理
			child = new Date(parent.getTime())
		} else {
			// 处理对象原型
			proto = Object.getPrototypeOf(parent)
			// 利用Object.create切断原型链
			child = Object.create(proto)
		}

		// 处理循环引用
		const index = parents.indexOf(parent)

		if (index !== -1) {
			// 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
			return children[index]
		}
		parents.push(parent)
		children.push(child)

		for (const i in parent) {
			// 递归
			child[i] = _clone(parent[i])
		}

		return child
	}
	return _clone(parent)
}
