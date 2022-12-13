# Form

基于 el-form，并对其一些常用的表单组件进行二次封装。

**封装原因**：实际工作中表单无处不在，个人 感觉 el-form 在处理 `复杂表单`时的使用体验并不是很友好，需要写很多重复的代码，所以对其进行了二次封装，使其使用起来更加简单。

**封装目的**： 使其使用起来更加简单，简化表单校验，减少重复代码，提高开发效率。

::: tip
极度简单的验证器开箱即用，可以处理 80% 的用例。验证规则和验证消息都是简单的 `rules`
:::

## 典型表单

最基础的表单包括各种输入表单项，比如`input`、`select`、`radio`、`checkbox`等。

:::tip
目前只封装了 jlg-form、jlg-form-item、jlg-input、jlg-select、jlg-date-picker、jlg-autocomplete 等组件,对于其他表单组件，请使用 `jlg-form-item` 组件包裹
:::

:::demo

```vue
<template>
	<el-radio-group v-model="labelPosition" label="label position">
		<el-radio-button label="left">Left</el-radio-button>
		<el-radio-button label="right">Right</el-radio-button>
		<el-radio-button label="top">Top</el-radio-button>
	</el-radio-group>
	<p>当前表单值：</p>
	<pre>{{ formData }}</pre>
	<jlg-form
		ref="formRef"
		:model="formData"
		:label-position="labelPosition"
		label-width="120px"
	>
		<jlg-input label="活动名称" prop="name" rules="required" />
		<jlg-date-picker
			label="活动时间"
			prop="date"
			placeholder="请选择活动时间"
		/>
		<jlg-number-input label="参加人数" prop="number" />
		<jlg-form-item label="立即出发" prop="delivery">
			<el-switch v-model="formData.delivery" />
		</jlg-form-item>
		<jlg-form-item>
			<el-button type="primary" @click="handleSubmit">创建</el-button>
			<el-button @click="handleResetFields">重置</el-button>
		</jlg-form-item>
	</jlg-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const labelPosition = ref('right')

let formRef = ref(null)
let formData = ref({
	name: '',
	date: '',
	number: null,
	delivery: false
})

const handleSubmit = () => {
	/**
	 * 表单快速校验与提交
	 * @param validateErrorText 校验失败时的提示文本
	 */
	formRef.value.submit('表单校验失败').then((formData) => {
		console.log('formData', formData)
		alert('表单校验成功')
	})
}

const handleResetFields = () => {
	formRef.value.epRef.resetFields()
}
</script>
```

:::

## 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

:::demo

```vue
<template>
	<jlg-form ref="formRef" :model="formData" label-width="120px">
		<jlg-input label="密码" prop="pass" type="password" rules="required" />
		<jlg-input
			label="确认密码"
			prop="checkPass"
			type="password"
			:rules="['required', { validator: checkPass, trigger: 'blur' }]"
		/>
		<jlg-form-item>
			<el-button type="primary" @click="handleSubmit">提交</el-button>
			<el-button @click="handleResetFields">重置</el-button>
		</jlg-form-item>
	</jlg-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let formRef = ref(null)
let formData = ref({
	pass: '',
	checkPass: ''
})

const checkPass = (rule, value, callback) => {
	if (value !== formData.pass) {
		callback(new Error('两次输入密码不一致!'))
	} else {
		callback()
	}
}

const handleSubmit = () => {
	/**
	 * 表单快速校验与提交
	 * @param validateErrorText 校验失败时的提示文本
	 */
	formRef.value.submit('表单校验失败').then((formData) => {
		console.log('formData', formData)
		alert('表单校验成功')
	})
}

const handleResetFields = () => {
	formRef.value.epRef.resetFields()
}
</script>
```

:::

## 添加/删除表单项

:::demo 除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。

```vue
<template>
	<pre>{{ formData }}</pre>
	<jlg-form ref="formRef" :model="formData" label-width="120px">
		<jlg-input label="活动名称" prop="name" rules="required" />
		<jlg-date-picker
			label="活动时间"
			prop="date"
			placeholder="请选择活动时间"
		/>
		<template v-for="(item, index) in formData.items">
			<jlg-input
				:key="item.prop + index"
				:label="item.label"
                :prop="'items.' + index + '.value'"
				:rules="item.rules"
			/>
			<el-button
				@click="removeRule(index)"
				style="margin-bottom: 18px;margin-left: 120px"
			>
				删除活动地点{{ index }}
			</el-button>
		</template>
		<jlg-form-item>
			<el-button type="primary" @click="handleSubmit">创建</el-button>
			<el-button @click="handleResetFields">重置</el-button>
			<el-button @click="addRule">添加活动地点</el-button>
		</jlg-form-item>
	</jlg-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

let formRef = ref(null)
let formData = reactive({
	name: '',
	date: '',
	items: [
		{
			label: '活动地点',
			value: '',
			rules: 'required'
		}
	]
})

let addRule = () => {
   // 随机添加必填
    let isRequired = Math.random() > 0.5
	formData.items.push({
		label: '活动地点' + formData.items.length,
		value: '',
		rules: isRequired ? 'required' : null
	})
}

let removeRule = (index: number) => {
	formData.items.splice(index, 1)
}

const handleSubmit = () => {
  formRef.value.submit().then((formData) => {
    console.log('formData', formData)
  })
}

const handleResetFields = () => {
  formRef.value.epRef.resetFields()
}
</script>
```

:::

## Props

| 属性名                      | 说明                                                         | 类型                        | 默认值  |
| --------------------------- | ------------------------------------------------------------ | --------------------------- | ------- |
| `model`                     | 表单数据对象                                                 | Record<string, any>         | —       |
| `inline`                    | 行内表单模式                                                 | boolean                     | `false` |
| `label-position`            | 表单域标签的位置， 当设置为 `left` 或 `right` 时，则也需要设置 `label-width` 属性 | 'left'/'right' \/'top'      |         |
| `label-width`               | 标签的长度，例如 `'50px'`。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 `auto`。 | string/number               |         |
| `hide-required-asterisk`    | 是否隐藏必填字段标签旁边的红色星号。                         | boolean                     | `false` |
| `require-asterisk-position` | 星号的位置。                                                 | 'left' /'right'             |         |
| `show-message`              | 是否显示校验错误信息                                         | boolean                     | `true`  |
| `inline-message`            | 是否以行内形式展示校验信息                                   | boolean                     | `false` |
| `status-icon`               | 是否在输入框中显示校验结果反馈图标                           | boolean                     | `false` |
| `validate-on-rule-change`   | 是否在 `rules` 属性改变后立即触发一次验证                    | boolean                     | `true`  |
| `size`                      | 用于控制该表单内组件的尺寸                                   | 'large' /'default' /'small' |         |
| `disabled`                  | 是否禁用该表单内的所有组件。 如果设置为 `true`, 它将覆盖内部组件的 `disabled` 属性 | boolean                     | `false` |
| `scroll-to-error`           | 当校验失败时，滚动到第一个错误表单项                         | boolean                     | `false` |

## Events

| 方法名        | 说明                 | 
|------------|--------------------|
| `submit` | 提交表单并对整个表单的内容进行验证。 |

查看链接：[el-form 中文文档](https://element-plus.org/zh-CN/component/form.html)     


::: warning 注意
该组件的 `ref` 指向的是 `jlg-form` ，而不是`el-form`,要获取`el-form`的`ref`，需要使用组件`epRef`属性。
:::