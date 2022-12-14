# LazySelect

ElementPlus 级联选择组件懒加载的拓展

## 背景

ElementPlus 的 `Cascader`级联选择器懒加载的时候，无法搜索出未加载的选项.在网上没有搜索到好的解决方案，所以决定开发此组件

:::tip 注意事项

- 只有`jlg-lazy-cascade` 组件渲染完成后， 再设置 `v-model` 的绑定值才能正确回显
- 如果需要在 `jlg-form`内使用，注意放在 `jlg-form-item` 组件内部

:::

## 单选

:::demo

```vue
<template>
	<pre>inputValue:{{ inputValue }}</pre>
	<jlg-lazy-cascade filterable v-model="inputValue" :props="cascadeProps" />
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

let inputValue = ref<Array<number>>([])
let cascadeOptions = ref([])

// 获取所有省份
function SearchAllProvinceFunc(levelValue) {
	return new Promise((resolve) => {
		setTimeout(() => {
			let nodes = [
				{
					value: 110000,
					label: '北京',
					leaf: levelValue
				}
			]
			// 调用 `resolve` 回调以返回子节点数据并指示加载完成。
			resolve(nodes)
		}, 1000)
	})
}

// 获取对应的市
function SearchAllCityByProvinceFunc(levelValue) {
	return new Promise((resolve) => {
		setTimeout(() => {
			let nodes = [
				{
					value: 110100,
					label: '辖区',
					leaf: levelValue
				}
			]
			// 调用 `resolve` 回调以返回子节点数据并指示加载完成。
			console.log('获取对应的市', nodes)
			resolve(nodes)
		}, 1000)
	})
}

// 获取对应的县/区
function SearchAllCountyByCityFunc(levelValue) {
	return new Promise((resolve) => {
		setTimeout(() => {
			let nodes = [
				{
					value: 110101,
					label: '东城区',
					leaf: levelValue
				},
				{
					value: 110102,
					label: '西城区',
					leaf: levelValue
				},
				{
					value: 110105,
					label: '朝阳区',
					leaf: levelValue
				},
				{
					value: 110106,
					label: '丰台区',
					leaf: levelValue
				},
				{
					value: 110107,
					label: '石景山区',
					leaf: levelValue
				},
				{
					value: 110108,
					label: '海淀区',
					leaf: levelValue
				},
				{
					value: 110109,
					label: '门头沟区',
					leaf: levelValue
				},
				{
					value: 110111,
					label: '房山区',
					leaf: levelValue
				},
				{
					value: 110112,
					label: '通州区',
					leaf: levelValue
				},
				{
					value: 110113,
					label: '顺义区',
					leaf: levelValue
				},
				{
					value: 110114,
					label: '昌平区',
					leaf: levelValue
				},
				{
					value: 110115,
					label: '大兴区',
					leaf: levelValue
				},
				{
					value: 110116,
					label: '怀柔区',
					leaf: levelValue
				},
				{
					value: 110117,
					label: '平谷区',
					leaf: levelValue
				},
				{
					value: 110118,
					label: '密云区',
					leaf: levelValue
				},
				{
					value: 110119,
					label: '延庆区',
					leaf: levelValue
				}
			]
			// 调用 `resolve` 回调以返回子节点数据并指示加载完成。
			console.log('获取对应的县/区', nodes)
			resolve(nodes)
		}, 1000)
	})
}

nextTick(() => {
	inputValue.value = [110000, 110100, 110102]
})

const lazyLoadFunc = (node, resolve) => {
	const { level } = node
	let levelValue = level >= 2
	console.log('lazyLoadFunc', node)
	switch (level) {
		case 0:
			SearchAllProvinceFunc(levelValue).then((dataList) => {
				resolve(dataList)
			})
			break
		case 1:
			SearchAllCityByProvinceFunc(levelValue).then((dataList) => {
				resolve(dataList)
			})
			break
		case 2:
			SearchAllCountyByCityFunc(levelValue).then((dataList) => {
				resolve(dataList)
			})
			break
		default:
			break
	}
}

const cascadeProps = {
    multiple: true,
	lazyLoad: lazyLoadFunc
}
</script>
```

:::

## 单选不关联

:::demo

```vue
<template>
	<pre>inputValue:{{ inputValue }}</pre>
	<jlg-lazy-cascade filterable v-model="inputValue" :props="props" />
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

let inputValue = ref<Array<number>>([])

let id = 0
const props = {
	checkStrictly: true,
	lazyLoad(node, resolve) {
		const { level } = node
		setTimeout(() => {
			const nodes = Array.from({ length: level + 1 }).map((item) => ({
				value: ++id,
				label: `Option - ${id}`,
				leaf: level >= 2
			}))
			resolve(nodes)
		}, 1000)
	}
}
</script>
```

:::

## 多选 + 前端搜索（只能搜索已经加载的数据）

:::demo

```vue
<template>
	<pre>inputValue:{{ inputValue }}</pre>
	<jlg-lazy-cascade
		clearable
		filterable
		collapseTags
		collapseTagsTooltip
		v-model="inputValue"
		:props="props"
	/>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

let inputValue = ref<Array<number>>([])

let id = 0
const props = {
	multiple: true,
	lazyLoad(node, resolve) {
		const { level } = node
		setTimeout(() => {
			const nodes = Array.from({ length: level + 1 }).map((item) => ({
				value: ++id,
				label: `Option - ${id}`,
				leaf: level >= 2
			}))
			resolve(nodes)
		}, 1000)
	}
}
</script>
```

:::

## Props 

|属性名|说明|类型|可选值|默认值|
|---|---|---|---|---|
|v-model|选中项绑定值|-|-|-|
|props|配置选项，具体见下表|object|-|-|
|placeholder|输入框占位文本	|string|-|请选择|
|disabled|是否禁用|boolean|-|false|
|filterable|是否开启搜索|boolean|-|false|
|clearable|是否支持清空选项|boolean|-|false|

## Props 属性

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|multiple|是否多选	|boolean|-|false|
|checkStrictly|是否严格的遵守父子节点不互相关联|boolean|-|false|
|value|指定选项的值为选项对象的某个属性值|string|-|'value'|
|label|指定选项标签为选项对象的某个属性值	|string|-|'label'|
|leaf|指定选项的叶子节点的标志位为选项对象的某个属性值|string|-|leaf|
|lazyLoad|加载动态数据的方法|Function|-|-|
|lazySearch|动态搜索数据的方法|Function|-|-|