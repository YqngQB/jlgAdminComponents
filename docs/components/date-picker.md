# DatePicker 日期选择器

用于选择或输入日期

## 选择某一天

以”日“为基本单位，基础的日期选择控件
基本单位由 `type` 属性指定。
通过 `shortcuts` 配置快捷选项，

禁用日期通过 `min` 与 `max`属性设置，传入函数，也可以通过 `disabledDate` 设置，传入函数
:::warning
如果设置了 `disabled-date` 属性，`min`与`max`属性将不生效。`
:::
:::demo

```vue
<template>
	<el-radio-group v-model="size" label="size control" size="small">
		<el-radio-button label="large">large</el-radio-button>
		<el-radio-button label="default">default</el-radio-button>
		<el-radio-button label="small">small</el-radio-button>
	</el-radio-group>
	<div class="demo-date-picker">
		<div class="block">
			<span class="demonstration">默认</span>
			<pre>{{ value1 }}</pre>
			<jlg-date-picker
				v-model="value1"
				type="date"
				placeholder="选择一天"
				:size="size"
				min="2022-12-05"
				:max="new Date()"
			/>
		</div>
		<div class="block">
			<span class="demonstration">具有快速选项的选择器</span>
			<pre>{{ value2 }}</pre>
			<jlg-date-picker
				v-model="value2"
				type="date"
				placeholder="选择一天"
				min="2022-12-05"
				:disabled-date="disabledDate"
				:shortcuts="shortcuts"
				:size="size"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
	{
		text: '今天',
		value: new Date()
	},
	{
		text: '昨天',
		value: () => {
			const date = new Date()
			date.setTime(date.getTime() - 3600 * 1000 * 24)
			return date
		}
	},
	{
		text: '一星期前',
		value: () => {
			const date = new Date()
			date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
			return date
		}
	}
]

const disabledDate = (time: Date) => {
	return time.getTime() > Date.now()
}
</script>

<style scoped>
.demo-date-picker {
	display: block;
	width: 100%;
	padding: 0;
	flex-wrap: wrap;
}

.demo-date-picker .block {
	padding: 30px 0;
	text-align: center;
	border-right: solid 1px var(--el-border-color);
	flex: 1;
}

.demo-date-picker .block:last-child {
	border-right: none;
}

.demo-date-picker .demonstration {
	display: block;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	margin-bottom: 20px;
}
</style>
```

:::

## 其他日期单位

通过扩展基础的日期选择，可以选择周、月、年或多个日期
:::demo

```vue
<template>
	<div class="demo-date-picker">
		<div class="container">
			<div class="block">
				<span class="demonstration">星期</span>
				<pre>{{ value1 }}</pre>
				<jlg-date-picker
					v-model="value1"
					type="week"
					:max="new Date('Sun Dec 04 2022 00:00:00 GMT+0800 (中国标准时间)')"
					placeholder="最大不能超过2022第50周"
				/>
			</div>
			<div class="block">
				<span class="demonstration">月</span>
				<pre>{{ value2 }}</pre>
				<jlg-date-picker v-model="value2" type="month" min="2022/08/01" />
			</div>
		</div>
		<div class="container">
			<div class="block">
				<span class="demonstration">年</span>
				<pre>{{ value3 }}</pre>
				<jlg-date-picker v-model="value3" type="year" min="2021/01/01" />
			</div>
			<div class="block">
				<span class="demonstration">多个日期</span>
				<pre>{{ value4 }}</pre>
				<jlg-date-picker v-model="value4" type="dates" />
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
<style scoped>
.demo-date-picker {
	display: block;
	width: 100%;
	padding: 0;
	flex-wrap: wrap;
}

.demo-date-picker .block {
	padding: 30px 0;
	text-align: center;
	border-right: solid 1px var(--el-border-color);
	flex: 1;
}
.demo-date-picker .block:last-child {
	border-right: none;
}

.demo-date-picker .container {
	flex: 1;
	border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
	border-right: none;
}
.demo-date-picker .container .block:last-child {
	border-top: solid 1px var(--el-border-color);
}
.demo-date-picker .container:last-child {
	border-right: none;
}

.demo-date-picker .demonstration {
	display: block;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	margin-bottom: 20px;
}
</style>
```

:::

## 选择一段时间

可在一个选择器中便捷地选择一个时间范围

在选择日期范围时，默认情况下左右面板会联动。

如果希望两个面板各自独立切换当前月份，可以使用 `unlink-panels` 属性解除联动。
:::demo

```vue
<template>
	<el-radio-group v-model="size" label="size control" size="small">
		<el-radio-button label="large">large</el-radio-button>
		<el-radio-button label="default">default</el-radio-button>
		<el-radio-button label="small">small</el-radio-button>
	</el-radio-group>
	<div class="demo-date-picker">
		<div class="block">
			<span class="demonstration">Default</span>
			<pre>{{ value }}</pre>
			<jlg-date-picker
				v-model="value1"
				type="daterange"
				range-separator="To"
				start-placeholder="Start date"
				end-placeholder="End date"
				:size="size"
			/>
		</div>
		<div class="block">
			<span class="demonstration">With quick options</span>
			<pre>{{ value2 }}</pre>
			<jlg-date-picker
				v-model="value2"
				type="daterange"
				unlink-panels
				range-separator="To"
				start-placeholder="Start date"
				end-placeholder="End date"
				:shortcuts="shortcuts"
				:size="size"
                min="2021/01/01"
                :max="new Date()"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
	{
		text: 'Last week',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
			return [start, end]
		}
	},
	{
		text: 'Last month',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
			return [start, end]
		}
	},
	{
		text: 'Last 3 months',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
			return [start, end]
		}
	}
]
</script>

<style scoped>
.demo-date-picker {
	display: block;
	width: 100%;
	padding: 0;
	flex-wrap: wrap;
}

.demo-date-picker .block {
	padding: 30px 0;
	text-align: center;
	border-right: solid 1px var(--el-border-color);
	flex: 1;
}

.demo-date-picker .block:last-child {
	border-right: none;
}

.demo-date-picker .demonstration {
	display: block;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	margin-bottom: 20px;
}
</style>
```

:::

## 国际化

由于 Element Plus 的默认语言为英语，如果你需要设置其它的语言，请参考[国际化](https://crowdin.com/zh-CN/guide/i18n)文档。

要注意的是：日期相关的文字（月份，每一周的第一天等等）也都是通过国际化来配置的。

## Props

| 属性名                   | 说明                                                    | 类型                                   | 默认值          |
|-----------------------|-------------------------------------------------------|--------------------------------------|--------------|
| model-value / v-model | 绑定值，如果它是数组，长度应该是 2                                    | Date / number / string / Array       | —            |
| readonly              | 只读                                                    | boolean                              | false        |
| disabled              | 禁用                                                    | boolean                              | false        |
| size                  | 输入框尺寸                                                 | string                               | default      |
| editable              | 文本框可输入                                                | boolean                              | true         |
| clearable             | 是否显示清除按钮                                              | boolean                              | true         |
| placeholder           | 非范围选择时的占位内容                                           | string                               | —            |
| start-placeholder     | 范围选择时开始日期的占位内容                                        | string                               | —            |
| end-placeholder       | 范围选择时结束日期的占位内容                                        | string                               | —            |
| type                  | 显示类型                                                  | string                               | date         |
| format                | 显示在输入框中的格式                                            | string                               | YYYY-MM-DD   |
| popper-class          | DatePicker 下拉框的类名                                     | string                               | —            |
| range-separator       | 选择范围时的分隔符                                             | string                               | '-'          |
| default-value         | 可选，选择器打开时默认显示的时间                                      | Date / [Date, Date]                  | —            |
| default-time          | 范围选择时选中日期所使用的当日内具体时刻                                  | Date / [Date, Date]                  | —            |
| value-format          | 可选，绑定值的格式。 不指定则绑定值为 Date 对象                           | string                               | —            |
| id                    | 等价于原生 `id` 属性                                         | string / [string, string]            | —            |
| name                  | 等价于原生 `name` 属性                                       | string                               | —            |
| unlink-panels         | 在范围选择器里取消两个日期面板之间的联动                                  | boolean                              | false        |
| prefix-icon           | 自定义前缀图标                                               | `string \                            | Component`   | Date        |
| clear-icon            | 自定义清除图标                                               | `string \                            | Component`   | CircleClose |
| validate-event        | 输入时是否触发表单的校验                                          | boolean                              | true         |
| disabled-date         | 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。 | function                             | —            |
| shortcuts             | 设置快捷选项，需要传入数组对象                                       | `Array<{ text: string, value: Date \ | Function }>` | —           |
| cell-class-name       | 设置自定义类名                                               | Function(Date)                       | —            |
| teleported            | 是否将 date-picker 的下拉列表插入至 body 元素                      | boolean                              | true         |

## el-date-picker 事件

| 事件名             | 说明                                                       | 回调参数                    |
|-----------------|----------------------------------------------------------|-------------------------|
| change          | 用户确认选定的值时触发                                              | `(val: typeof v-model)` |
| blur            | 在组件 Input 失去焦点时触发                                        | `(e: FocusEvent)`       |
| focus           | 在组件 Input 获得焦点时触发                                        | `(e: FocusEvent)`       |
| calendar-change | 如果用户没有选择日期，那默认展示当前日的月份。 你可以使用 `default-value` 来设置成其他的日期。 | `(val: [Date, Date])`   |
| panel-change    | 当日期面板改变时触发。                                              | `(date, mode, view)`    |
| visible-change  | 当 DatePicker 的下拉列表出现/消失时触发                               | `(visibility: boolean)` |

## el-date-picker 方法

| 方法名         | 说明           | 参数  |
|-------------|--------------|-----|
| focus       | 使 input 获取焦点 | —   |
| handleOpen  | 打开日期选择器弹窗    | —   |
| handleClose | 关闭日期选择器弹窗    | —   |

::: warning 注意
该组件的 `ref` 指向的是 `jlg-date-picker` ，而不是`el-date-picker`,要获取`el-date-picker`的`ref`，需要使用组件`epRef`属性。
:::