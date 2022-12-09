# NumberInput

数字输入框,对 el-input 二次封装,仅允许输入标准的数字值,可定义精度与范围

:::tip
number-input 组件是基于 el-input + el-form-item 组件结合进行封装的，使用正则表达式限制非数字类型输入
:::

## 基础用法

:::demo

```vue
<template>
	<pre>input值：{{ input }}</pre>
	<pre>input类型：{{ getType(input) }}</pre>
	<jlg-number-input
		v-model="input"
		@blur="handleBlurEvent"
		@input="handleInputEvent"
		@change="handleChangetEvent"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')

const handleInputEvent = (value: number | string) => {
	console.log('Input Event', value)
}

const handleChangetEvent = (value: number | null) => {
	console.log('Change Event', value)
}

const handleBlurEvent = () => {
	console.log('Blur Event')
}
// 获取值类型
const getType = (value: any) => {
	return Object.prototype.toString.call(value).slice(8, -1)
}
</script>
```

:::

## 禁用状态 and 一键清空

通过 `disabled` 属性指定是否禁用 input 组件

使用 `clearable` 属性即可得到一个可一键清空的输入框
:::demo `disabled` 状态下自动隐藏当前组件 placeholder

```vue
<template>
	<pre>input值：{{ input }}</pre>
	<el-switch v-model="isDisabled" />
	<jlg-number-input v-model="input" :disabled="isDisabled" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
let isDisabled = ref(true)
</script>
```

:::

## 设置最小值和最大值

使用 `min` 和 `max` 属性即可设置最小值和最大值

:::demo

```vue
<template>
	<pre>{{ input }}</pre>
	<jlg-number-input
		v-model="input"
		placeholder="最小不能低于1最大不能超过100"
		:min="1"
		:max="100"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

:::

## 设置精度（小数位数）

使用 `precision` 属性即可设置精度（小数位数，四舍五入）
:::demo

```vue
<template>
	<jlg-number-input v-model="input" placeholder="设置精度为2" :precision="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

:::

## 带图标的输入框

带有图标标记输入类型
:::tip
具体用法与 el-input 一致,链接：https://element-plus.org/zh-CN/component/input.html#%E5%B8%A6%E5%9B%BE%E6%A0%87%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86
:::

:::demo 要在输入框中添加图标，你可以简单地使用 prefix-icon 和 suffix-icon 属性。 另外， prefix 和 suffix 命名的插槽也能正常工作。

```vue
<template>
	<div class="demo-input-suffix">
		<el-row :gutter="20">
			<span class="ml-3 w-35 text-gray-600 inline-flex items-center">
				Using attributes
			</span>
			<jlg-number-input
				v-model="input1"
				class="w-50 m-2"
				placeholder="Pick a date"
				:suffix-icon="Calendar"
			/>
			<jlg-number-input
				v-model="input2"
				class="w-50 m-2"
				placeholder="Type something"
				:prefix-icon="Search"
			/>
		</el-row>
	</div>
	<div class="demo-input-suffix">
		<el-row :gutter="20">
			<span class="ml-3 w-35 text-gray-600 inline-flex items-center">
				Using slots
			</span>
			<jlg-number-input
				v-model="input3"
				class="w-50 m-2"
				placeholder="Pick a date"
			>
				<template #suffix>元</template>
			</jlg-number-input>
			<jlg-number-input
				v-model="input4"
				class="w-50 m-2"
				placeholder="Type something"
			>
				<template #prefix>%</template>
			</jlg-number-input>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/*
 * 文档示例引入 el-icon 图标会报错，实际使用把下面的注释代码取消注释
 * */
// import { Calendar, Search } from '@element-plus/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
```

:::

## 占位符

组件内置了 `placeholder` 默认值，也可以手动设置 `placeholder` 属性来自定义站位符

:::demo

```vue
<template>
	默认占位符：
	<jlg-number-input v-model="input" />
	默认占位符：
	<jlg-number-input v-model="input" maxlength="4" />
	自定义占位符：
	<jlg-number-input v-model="input" placeholder="自定义占位符" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref(null)
</script>
```

:::

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 slot 来指定在 Input 中分发的前置或者后置的内容。

:::demo

```vue
<template>
	<div>
		<jlg-number-input v-model="input1" placeholder="Please input">
			<template #prepend>Http://</template>
		</jlg-number-input>
	</div>
	<div class="mt-4">
		<jlg-number-input v-model="input2" placeholder="Please input">
			<template #append>.com</template>
		</jlg-number-input>
	</div>
	<div class="mt-4">
		<jlg-number-input
			v-model="input3"
			placeholder="Please input"
			class="input-with-select"
		>
			<template #prepend>
				<el-select v-model="select" placeholder="Select" style="width: 115px">
					<el-option label="Restaurant" value="1" />
					<el-option label="Order No." value="2" />
					<el-option label="Tel" value="3" />
				</el-select>
			</template>
			<template #append>
				<el-button :icon="Search" />
			</template>
		</jlg-number-input>
	</div>
	<div class="mt-4">
		<jlg-number-input
			v-model="input3"
			placeholder="Please input"
			class="input-with-select"
		>
			<template #prepend>
				<el-button :icon="Search" />
			</template>
			<template #append>
				<el-select v-model="select" placeholder="Select" style="width: 115px">
					<el-option label="Restaurant" value="1" />
					<el-option label="Order No." value="2" />
					<el-option label="Tel" value="3" />
				</el-select>
			</template>
		</jlg-number-input>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>
```

:::

## 输入长度限制

使用 maxlength 和 minlength 属性, 来控制输入内容的最大字数和最小字数。
"字符数"使用 JavaScript 字符串长度来衡量。
为文本或文本输入类型设置 maxlength prop 可以限制输入值的长度。
允许你通过设置 show-word-limit 到 true 来显示剩余字数。

:::demo

```vue
<template>
	<jlg-number-input
		v-model="text"
		maxlength="10"
		placeholder="Please input"
		show-word-limit
		type="text"
	/>
	<div style="margin: 20px 0" />
	<jlg-number-input
		v-model="textarea"
		maxlength="30"
		placeholder="Please input"
		show-word-limit
		type="textarea"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('')
const textarea = ref('')
</script>
```

:::

:::demo

```vue
<template>
	<jlg-number-input
		v-model="text"
		maxlength="10"
		placeholder="Please input"
		show-word-limit
		type="text"
	/>
	<div style="margin: 20px 0" />
	<jlg-number-input
		v-model="textarea"
		maxlength="30"
		placeholder="Please input"
		show-word-limit
		type="textarea"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('')
const textarea = ref('')
</script>
```

:::

:::tip el-input 属性扩展

`element-plus` 属性扩展，额外增加 `formItemConfig` 、`label` 、`prop` 、`rules` 四个属性

:::

## Props

| 属性名                | 说明                                                                                                           | 类型                                                        | 默认值   |
| --------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------- |
| formItemConfig        | el-form-item 属性                                                                                              |                                                             | —        |
| label                 | 标签文本                                                                                                       |                                                             | —        |
| prop                  | model 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])                                                        |                                                             | —        |
| rules                 | 表单校验规则                                                                                                   |                                                             | —        |
| prependText           | 输入框前置文本                                                                                                 | 'string’                                                    | —        |
| appendText            | 输入框后置文本内容                                                                                             | 'string’                                                    |          |
| prefixText            | 输入框头部文本内容                                                                                             | 'string’                                                    |          |
| suffixTex             | 输入框尾部文本内容                                                                                             | 'string’                                                    |          |
| type                  | 类型                                                                                                           | 'text' / 'textarea'                                         | —        |
| model-value / v-model | 绑定值                                                                                                         | 'string' / 'number'                                         | —        |
| maxlength             | 最大输入长度                                                                                                   | 'string' / 'number'                                         | —        |
| minlength             | 原生属性，最小输入长度                                                                                         | 'number'                                                    | —        |
| placeholder           | 输入框占位文本                                                                                                 | 'string'                                                    | —        |
| clearable             | 是否显示清除按钮                                                                                               | 'boolean'                                                   | false    |
| disabled              | 是否禁用                                                                                                       | 'boolean'                                                   | false    |
| size                  | 输入框尺寸，只在 `type` 不为 'textarea' 时有效                                                                 | 'large' / 'default' / 'small'`                              | —        |
| prefix-icon           | 自定义前缀图标                                                                                                 | 'string' / ^[Component]                                     | —        |
| suffix-icon           | 自定义后缀图标                                                                                                 | 'string' / ^[Component]                                     | —        |
| rows                  | 输入框行数，仅 `type` 为 'textarea' 时有效                                                                     | 'number'                                                    | 'number' |
| autosize              | textarea 高度是否自适应，仅 `type` 为 'textarea' 时生效。 可以接受一个对象，比如: `{ minRows: 2, maxRows: 6 }` | 'boolean' / `Pows?: numer, maxRows?: number }`              | false    |
| autocomplete          | 原生 `autocomplete` 属性                                                                                       | 'string'                                                    | off      |
| name                  | 等价于原生 input `name` 属性                                                                                   | 'string'                                                    | —        |
| readonly              | 原生 `readonly` 属性，是否只读                                                                                 | boolean'                                                    | false    |
| max                   | 设置最大值                                                                                                     | 'number'                                                    | —        |
| min                   | 设置最小值                                                                                                     | 'number'                                                    | —        |
| step                  | 设置输入字段的合法数字间隔                                                                                     | 'number'                                                    | —        |
| resize                | 控制是否能被用户缩放                                                                                           | `none` / `both` / `horizontal` / `vertical`                 | —        |
| autofocus             | 原生属性，自动获取焦点                                                                                         | `boolean`                                                   | false    |
| form                  | 原生属性                                                                                                       | `string`                                                    | —        |
| label                 | 等价于原生 input `aria-label` 属性                                                                             | `string`                                                    | —        |
| tabindex              | 输入框的 tabindex                                                                                              | `string` / `number`                                         | —        |
| validate-event        | 输入时是否触发表单的校验                                                                                       | `boolean`                                                   | true     |
| input-style           | input 元素的 style                                                                                             | `string` / `CSSProperties` / `CSSProperties[]` / `string[]` | {}       |
| precision             | 设置精度（小数位数，四舍五入）                                                                                 | `number`                                                    |          |

## Events

| 事件名 | 说明                                                          |
| ------ | ------------------------------------------------------------- |
| blur   | 当选择器的输入框失去焦点时触发                                |
| focus  | 当选择器的输入框获得焦点时触发                                |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时触发 |
| input  | 在 Input 值改变时触发                                         |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发                 |

## Slots

| 插槽名  | 说明                                          | 类型 | Subtags |
| ------- | --------------------------------------------- | ---- | ------- |
| prefix  | 输入框头部内容，只对非 `type="textarea"` 有效 |      |         |
| suffix  | 输入框尾部内容，只对非 `type="textarea"` 有效 |      |         |
| prepend | 输入框前置内容，只对非 `type="textarea"` 有效 |      |         |
| append  | 输入框后置内容，只对非 `type="textarea"` 有效 |      |         |

## Exposes

| 名称           | 说明                        | 类型                                          |
| -------------- | --------------------------- | --------------------------------------------- |
| blur           | 使 input 失去焦点           | `() => void`                                  |
| clear          | 清除 input 值               | `() => void`                                  |
| focus          | 使 input 获取焦点           | `() => void`                                  |
| input          | Input HTML 元素             | `Ref<HTMLInputElement>`                       |
| ref            | HTML 元素 input 或 textarea | `Ref<HTMLInputElement / HTMLTextAreaElement>` |
| resizeTextarea | 改变 textarea 大小          | `() => void`                                  |
| select         | 选中 input 中的文字         | `() => void`                                  |
| textarea       | HTML textarea 元素          | `Ref<HTMLTextAreaElement>`                    |
| textareaStyle  | textarea 的样式             | `Ref<StyleValue>`                             |

::: warning 注意
该组件的 `ref` 指向的是 `jlg-number-input` ，而不是`el-input`,要获取`el-input`的`ref`，需要使用组件`epRef`属性。

```vue
<template>
	<jlg-number-input ref="input" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let input = ref(null)
//  使组件失去焦点
input.value.epRef.blur()
// 使组件获取焦点
input.value.epRef.focus()
</script>
```

:::
