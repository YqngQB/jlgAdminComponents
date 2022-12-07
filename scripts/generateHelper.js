const path = require('path')
let { resolve } = path

const { main } = require('components-helper')

// root
const root = resolve(__dirname, '..')
const docsRoot = resolve(root, 'docs')

console.log('docs:', resolve(docsRoot, 'components'))

// output
const output = resolve(root, 'lib')
// package
const compPackage = resolve(output, 'package.json')

const { version } = require(compPackage)

/**
 * 重写组件名称
 * @example BackTop -> vlib-back-top
 */
const reComponentName = (title) => {
	return `jlg-${title
		.replace(/\B([A-Z])/g, '-$1')
		.replace(/[ ]+/g, '-')
		.toLowerCase()}`
}

/**
 * 重写文档路径
 * @example src/back-top/README.md -> https://github.com/bfehub/vlib-starter/components/back-top/
 */
const reDocUrl = (_, header, path) => {
	const docs = 'https://github.com/bfehub/vlib-starter/components/'
	const name = path?.split('/')[1] + '/'
	const _header = header
		? header.replace(/[ ]+/g, '-').toLowerCase()
		: undefined
	return docs + name + (_header ? '#' + _header : '')
}

/**
 * 重写组件属性
 * @example v-model -> model-value
 */
const reAttribute = (value) => {
	switch (value) {
		case '':
		case '-':
		case '—':
			return undefined
		case 'v-model':
			return 'model-value'
		default:
			return value
	}
}

/**
 * 重写 web-types 来源
 * @example BackTop -> VlibBackTop
 */
const reWebTypesSource = (title) => {
	const symbol = `jlg${title
		.replace(/-/, ' ')
		.replace(/^\w|\s+\w/g, (item) => item.trim().toUpperCase())}`

	return { symbol }
}

main({
	// 基本配置
	name: 'jlg-admin-components',
	version,
	entry: `docs/**/*.md`,
	outDir: output,
	space: 2,

	// 解析配置
	reComponentName,
	reDocUrl,
	reAttribute,
	reWebTypesSource,

	// 表头配置
	propsName: '属性',
	propsDescription: '说明',
	propsType: '类型',
	propsOptions: '可选值',
	propsDefault: '默认值',

	eventsName: '事件名',
	eventsDescription: '说明',

	slotsName: '插槽名',
	slotsDescription: '说明',
	slotsType: '类型'
})
