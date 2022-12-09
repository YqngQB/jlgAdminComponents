# Autocomplete

根据输入内容提供对应的输入建议。

## 基础用法

Autocomplete 组件提供输入建议。

:::demo `fetch-suggestions` 属性是返回建议输入的方法。 在此示例中， querySearch(queryString, cb) 返回建议通过 cb(data) 自动完成建议。

```vue
<template>
	<el-row class="demo-autocomplete">
		<el-col :span="12">
			<div class="sub-title my-2 text-sm text-gray-600">
				list suggestions when activated
			</div>
			<jlg-autocomplete
				v-model="state1"
				:fetch-suggestions="querySearch"
				clearable
				class="inline-input w-50"
				placeholder="Please Input"
				@select="handleSelect"
			/>
		</el-col>
		<el-col :span="12">
			<div class="sub-title my-2 text-sm text-gray-600">
				list suggestions on input
			</div>
			<jlg-autocomplete
				v-model="state2"
				:fetch-suggestions="querySearch"
				:trigger-on-focus="false"
				clearable
				class="inline-input w-50"
				placeholder="Please Input"
				@select="handleSelect"
			/>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface RestaurantItem {
	value: string
	link: string
}

const state1 = ref('')
const state2 = ref('')

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
	const results = queryString
		? restaurants.value.filter(createFilter(queryString))
		: restaurants.value
	// call callback function to return suggestions
	cb(results)
}
const createFilter = (queryString: string) => {
	return (restaurant: RestaurantItem) => {
		return (
			restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		)
	}
}
const loadAll = () => {
	return [
		{ value: 'vue', link: 'https://github.com/vuejs/vue' },
		{ value: 'element', link: 'https://github.com/ElemeFE/element' },
		{ value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
		{ value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
		{ value: 'vuex', link: 'https://github.com/vuejs/vuex' },
		{ value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
		{ value: 'babel', link: 'https://github.com/babel/babel' }
	]
}

const handleSelect = (item: RestaurantItem) => {
	console.log(item)
}

onMounted(() => {
	restaurants.value = loadAll()
})
</script>
```

:::

## 自定义模板

自定义如何显示输入建议。

:::demo 使用 scoped slot 自定义输入建议。 在这个范围中，你可以使用 item 键来访问当前输入建议对象。

```vue
<template>
	<jlg-autocomplete
		v-model="state"
		:fetch-suggestions="querySearch"
		popper-class="my-autocomplete"
		placeholder="Please input"
		@select="handleSelect"
	>
		<template #suffix>%</template>
		<template #default="{ item }">
			<div class="value">{{ item.value }}</div>
			<span class="link">{{ item.link }}</span>
		</template>
	</jlg-autocomplete>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import { Edit } from '@element-plus/icons-vue'

interface LinkItem {
	value: string
	link: string
}

const state = ref('')
const links = ref<LinkItem[]>([])

const querySearch = (queryString: string, cb) => {
	const results = queryString
		? links.value.filter(createFilter(queryString))
		: links.value
	// call callback function to return suggestion objects
	cb(results)
}
const createFilter = (queryString) => {
	return (restaurant) => {
		return (
			restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		)
	}
}
const loadAll = () => {
	return [
		{ value: 'vue', link: 'https://github.com/vuejs/vue' },
		{ value: 'element', link: 'https://github.com/ElemeFE/element' },
		{ value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
		{ value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
		{ value: 'vuex', link: 'https://github.com/vuejs/vuex' },
		{ value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
		{ value: 'babel', link: 'https://github.com/babel/babel' }
	]
}
const handleSelect = (item: LinkItem) => {
	console.log(item)
}

const handleIconClick = (ev: Event) => {
	console.log(ev)
}

onMounted(() => {
	links.value = loadAll()
})
</script>

<style>
.my-autocomplete li {
	line-height: normal;
	padding: 7px;
}
.my-autocomplete li .name {
	text-overflow: ellipsis;
	overflow: hidden;
}
.my-autocomplete li .addr {
	font-size: 12px;
	color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
	color: #ddd;
}
</style>
```

:::

## 远程搜索

从服务端搜索数据。

:::demo

```vue
<template>
	<jlg-autocomplete
		v-model="state"
		:fetch-suggestions="querySearchAsync"
		placeholder="Please input"
		@select="handleSelect"
	/>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const state = ref('')

interface LinkItem {
	value: string
	link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
	return [
		{ value: 'vue', link: 'https://github.com/vuejs/vue' },
		{ value: 'element', link: 'https://github.com/ElemeFE/element' },
		{ value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
		{ value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
		{ value: 'vuex', link: 'https://github.com/vuejs/vuex' },
		{ value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
		{ value: 'babel', link: 'https://github.com/babel/babel' }
	]
}

let timeout: NodeJS.Timeout
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
	const results = queryString
		? links.value.filter(createFilter(queryString))
		: links.value

  clearTimeout(timeout as number | undefined)
	timeout = setTimeout(() => {
		cb(results)
	}, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
	return (restaurant: LinkItem) => {
		return (
			restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		)
	}
}

const handleSelect = (item: LinkItem) => {
	console.log(item)
}

onMounted(() => {
	links.value = loadAll()
})
</script>
```

:::

## 插槽扩展

在原有插槽基础上扩展,简单文本不必要使用插槽

:::demo

```vue
<template>
  <jlg-autocomplete placeholder=" " prepend-text="prepend-text" append-text="appendText" prefix-text="prefixText"  suffix-text="suffixText"/>
</template>
```

:::



## Props

| 属性名                            | 说明                                                         | 类型     | 默认值       |
| --------------------------------- | ------------------------------------------------------------ | -------- | ------------ |
| formItemConfig                    | el-form-item 属性                                            |          | —            |
| label                             | 标签文本                                                     |          | —            |
| prop                              | model 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])      |          | —            |
| rules                             | 表单校验规则                                                 |          | —            |
| prependText                       | 输入框前置文本                                               | string   | —            |
| appendText                        | 输入框后置文本内容                                           | string   |              |
| prefixText                        | 输入框头部文本内容                                           | string   |              |
| suffixTex                         | 输入框尾部文本内容                                           | string   |              |
| disabled                          | 自动补全组件是否被禁用                                       | boolean  | false        |
| value-key                         | 输入建议对象中用于显示的键名                                 | string   | value        |
| model-value / v-model             | 选中项绑定值                                                 | string   | —            |
| debounce                          | 获取输入建议的防抖延时，单位为毫秒                           | number   | 300          |
| placement                         | 菜单弹出位置                                                 |          | bottom-start |
| fetch-suggestions                 | 获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 `callback(data:[]) ` 来返回它 | Function | —            |
| popper-class                      | 下拉列表的类名                                               | string   | —            |
| trigger-on-focus                  | 获取焦点时是否显示建议                                       | boolean  | true         |
| name                              | 等价于原生 input `name` 属性                                 | string   | —            |
| select-when-unmatched             | 在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件 | boolean  | false        |
| hide-loading                      | 是否隐藏远程加载时的加载图标                                 | boolean  | false        |
| popper-append-to-body(deprecated) | 是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false | boolean  | false        |
| teleported                        | 是否将下拉列表元素插入 append-to 指向的元素下                | boolean  | true         |
| highlight-first-item              | 是否默认高亮远程搜索结果的第一项                             | boolean  | false        |
| fit-input-width                   | 下拉框的宽度是否与输入框相同                                 | boolean  | false        |

## Events

| 事件名 | 说明                  |
| ------ | --------------------- |
| select | 点击选中建议项时触发  |
| change | 在 Input 值改变时触发 |

## Slots

| 插槽名  | 说明                                          | 类型 | Subtags |
| ------- | --------------------------------------------- | ---- | ------- |
| prefix  | 输入框头部内容，只对非 `type="textarea"` 有效 |      |         |
| suffix  | 输入框尾部内容，只对非 `type="textarea"` 有效 |      |         |
| prepend | 输入框前置内容，只对非 `type="textarea"` 有效 |      |         |
| append  | 输入框后置内容，只对非 `type="textarea"` 有效 |      |         |
| default | 自定义输入建议的内容                          |      |         |

## 对外暴露的成员

详情链接：[el-autocomplete 对外暴露的成员](https://element-plus.org/zh-CN/component/autocomplete.html#%E5%AF%B9%E5%A4%96%E6%9A%B4%E9%9C%B2%E7%9A%84%E6%88%90%E5%91%98)

::: warning 注意
  该组件的 `ref` 指向的是 `jlg-autocomplete` ，而不是`el-autocomplete`,要获取`el-autocomplete`的`ref`，需要使用组件`epRef`属性。

```vue
<template>
  <jlg-autocomplete ref="autocompleteRef" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let autocompleteRef = ref(null)
//  使组件失去焦点
autocompleteRef.value.epRef.blur()
// 使组件获取焦点
autocompleteRef.value.epRef.focus()
</script>
```
:::
