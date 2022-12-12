# Select

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础选择器

:::demo

```vue
<template>
	<div class="example-showcase">
		<jlg-select
			v-model="value"
			:options="selectOptions"
			placeholder="Please select"
			size="large"
		/>
		<jlg-select
			v-model="value"
			:options="selectOptions"
			placeholder="Please select"
		/>
		<jlg-select
			v-model="value"
			:options="selectOptions"
			placeholder="Please select"
			size="small"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
let selectOptions = ref([
	{ value: 'Option 1', text: 'a0' },
	{ value: 'Option 2', text: 'a1' }
])
selectOptions.value = Array.from({ length: 100 }).map((_, idx) => ({
	value: `Option ${idx + 1}`,
	text: `${initials[idx % 10]}${idx}`
}))
</script>

<style scoped>
.example-showcase .jlg-select {
	margin-right: 4px;
}
</style>
```

:::

## 多选

默认隐藏多余标签，鼠标悬停展示剩余标签

:::demo

```vue
<template>
	<jlg-select
		v-model="value"
		:options="selectOptions"
		placeholder="Please select"
		multiple
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const selectOptions = ref(
	Array.from({ length: 1000 }).map((_, idx) => ({
		value: `Option ${idx + 1}`,
		text: `${initials[idx % 10]}${idx}`
	}))
)
</script>
```

:::

## 可过滤的多选 and 一键清除

当选项太多时，你可以使用 `filterable` 选项来启用过滤功能来找到所需的选项。

:::demo

```vue
<template>
	<jlg-select
		v-model="value"
		:options="selectOptions"
		placeholder="Please select"
		multiple
        filterable
        clearable
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const selectOptions = ref(
	Array.from({ length: 1000 }).map((_, idx) => ({
		value: `Option ${idx + 1}`,
		text: `${initials[idx % 10]}${idx}`
	}))
)
</script>
```

:::

## 禁用选择器本身或选项

您可以选择禁用 Select 或者 Select 中的某个选项

:::demo
```vue
<template>
  <jlg-select
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    multiple
  />
  <jlg-select
    v-model="value"
    disabled
    filterable
    :options="options"
    placeholder="Please select"
    multiple
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 100 }).map((_, idx) => ({
  value: `Option${idx + 1}`,
  text: `${initials[idx % 10]}${idx}`,
  disabled: idx % 10 === 0,
}))
</script>

```
:::

## 给选项进行分组

只要数据格式满足特定要求，我们就可以按照自己的意愿为选项进行分组(设置 `groupKey`)。


:::tip 注意
若是启用了虚拟化列表 `isVirtualized: true`,那么 groupKey 必须设置为 `options`, 
:::

:::demo

```vue
<template>
  <jlg-select
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
    group-key="options"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 10 }).map((_, idx) => {
  const label = idx + 1
  return {
    value: `Group ${label}`,
    text: `Group ${label}`,
    options: Array.from({ length: 10 }).map((_, idx) => ({
      value: `Option ${idx + 1 + 10 * label}`,
      text: `${initials[idx % 10]}${idx + 1 + 10 * label}`,
    })),
  }
})
</script>

```

:::

## 自定义选项的渲染模板

我们也可以通过自定义模板来渲染自己想要的选项内容。

:::demo
```vue
<template>
  <jlg-select
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
  >
    <template #default="{ item }">
      <span style="margin-right: 8px">{{ item.text }}</span>
      <span style="color: var(--el-text-color-secondary); font-size: 13px">
        {{ item.value }}
      </span>
    </template>
  </jlg-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  text: `${initials[idx % 10]}${idx}`,
}))
</script>

```
:::

## 远程搜索

输入关键字以从远程服务器中查找数据。

:::demo 为了启用远程搜索，需要将 `filterable` 和`remote` 设置为 `true`，同时传入一个 `remote-method`。 `remote-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。
```vue
<template>
  <jlg-select
    v-model="value"
    style="width: 240px"
    multiple
    filterable
    remote
    :remote-method="remoteMethod"
    clearable
    :options="options"
    :loading="loading"
    placeholder="Please enter a keyword"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
const list = states.map((item): ListItem => {
  return { value: `value:${item}`, text: `text:${item}` }
})

interface ListItem {
  value: string
  text: string
}

const value = ref([])
const options = ref<ListItem[]>([])
const loading = ref(false)

const remoteMethod = (query: string) => {
  if (query !== '') {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.filter((item) => {
        return item.text.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}
</script>

```
:::

## 使用 value-key

:::demo 当 `options.value` 是一个对象时，您需要指定一个 key
```vue
<template>
  <pre>{{value}}</pre>
  <jlg-select
    v-model="value"
    :options="options"
    placeholder="Please select"
    value-key="value"
    :is-virtualizedalized="false"
  >
    <template #default="{ item }">
      <span>{{ item.value.name }}</span>
    </template>
  </jlg-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
const options = Array.from({ length: 10 }).map((_, idx) => ({
  value: {
    name: `Option ${idx + 1}`,
    test: `test ${idx % 3}`,
  },
  text: `${initials[idx % 10]}${idx}`,
}))
</script>

```
:::

## Props

| 属性名                            | 说明                                                                                                                                                                              | 类型                               | 可选值                                                                                                    | 默认值        |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------- |
| formItemConfig                    | el-form-item 属性                                                                                                                                                                 |                                    | —                                                                                                         |               |
| label                             | 标签文本                                                                                                                                                                          |                                    | —                                                                                                         |               |
| prop                              | model 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])，或者一个点分隔的路径(例如 'a.b.0')                                                                                       |                                    | —                                                                                                         |               |
| rules                             | 表单校验规则。可以是一个以管状符分隔的字符串 例如 'required'，也可以是一个包含验证规则的对象数组 例如 ['required',{ required: true, message: '请输入邮箱地址', trigger: 'blur' }] |                                    | —                                                                                                         |               |
| isVirtualized                     | 是否启用虚拟化滚动                                                                                                                                                                |                                    | boolean                                                                                                   | false         |
| model-value / v-model             | 绑定值                                                                                                                                                                            | string / number / boolean / object | —                                                                                                         | —             |
| groupKey                          | 作为 分组 唯一标识的键名,如果想按照自己的意愿为选项进行分组,必须设置该属性(注意 jlg-select 的 groupKey 只能是 options)                                                            | string                             | —                                                                                                         | —             |
| multiple                          | 是否多选                                                                                                                                                                          | boolean                            | —                                                                                                         | false         |
| disabled                          | 是否禁用                                                                                                                                                                          | boolean                            | —                                                                                                         | false         |
| size                              | 输入框尺寸                                                                                                                                                                        | string                             | large/default/small                                                                                       | default       |
| clearable                         | 是否可以清空选项                                                                                                                                                                  | boolean                            | —                                                                                                         | false         |
| clear-icon                        | 自定义清除图标                                                                                                                                                                    | string                             | —                                                                                                         | CircleClose   |
| collapse-tags                     | 多选时是否将选中值按文字的形式展示                                                                                                                                                | boolean                            | —                                                                                                         | false         |
| collapse-tags-tooltip             | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 只有当 `collapse-tags` 设置为 true 时才会生效。                                                                            | boolean                            | true / false                                                                                              | false         |
| multiple-limit                    | 多选时可被选择的最大数目。 当被设置为 0 时，可被选择的数目不设限。                                                                                                                | number                             | —                                                                                                         | 0             |
| name                              | 选择器的原生 name 属性                                                                                                                                                            | string                             | —                                                                                                         | —             |
| effect                            | 文字提示（Tooltip）的主题，内置`dark`和`light`两种。                                                                                                                              | string                             | string                                                                                                    | light         |
| autocomplete                      | 自动完成选择输入                                                                                                                                                                  | string                             | —                                                                                                         | off           |
| placeholder                       | select input 的原生 autocomplete 属性                                                                                                                                             | string                             | —                                                                                                         | Please select |
| filterable                        | 是否可筛选                                                                                                                                                                        | boolean                            | —                                                                                                         | false         |
| autoDispatchMethod                | 非远程搜索模式下，初始化自动获取 options 数据所调用的方法                                                                                                                         | function                           |                                                                                                           |               |
| beforeAssignOptions               | 初始化自动设置 options 前的回调函数，返回 options                                                                                                                                 | function                           | function() :options                                                                                       |               |
| allow-create                      | 是否允许创建新条目， 当使用该属性时，`filterable`必须设置为`true`                                                                                                                 | boolean                            | —                                                                                                         | false         |
| reserve-keyword                   | 筛选时，是否在选择选项后保留关键字                                                                                                                                                | boolean                            | —                                                                                                         | true          |
| no-data-text                      | 当在没有数据时显示的文字，你同时可以使用`#empty`插槽进行设置。                                                                                                                    | string                             | —                                                                                                         | No Data       |
| popper-class                      | 选择器下拉菜单的自定义类名                                                                                                                                                        | string                             | —                                                                                                         | —             |
| popper-append-to-body(deprecated) | 是否将弹出框插入至 body 元素 当弹出框的位置出现问题时，你可以尝试将该属性设置为 false。                                                                                           | boolean                            | -                                                                                                         | false         |
| teleported                        | 该下拉菜单是否使用 teleport 插入 body 元素                                                                                                                                        | boolean                            | true / false                                                                                              | true          |
| persistent                        | 当下拉选择器未被激活并且`persistent`设置为`false`，选择器会被删除。                                                                                                               | boolean                            | true / false                                                                                              | true          |
| popper-options                    | 自定义 popper 选项，更多请参考 https://popper.js.org/docs/v2/                                                                                                                     | object                             | -                                                                                                         | -             |
| automatic-dropdown                | 对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单                                                                                                      | boolean                            | -                                                                                                         | false         |
| height                            | 下拉菜单的高度，每一个子选项的高度是 34px                                                                                                                                         | number                             | -                                                                                                         | 170           |
| scrollbar-always-on               | 控制是否总是展示滚动条                                                                                                                                                            | boolean                            | -                                                                                                         | false         |
| remote                            | 是否从服务器搜索数据                                                                                                                                                              | boolean                            | —                                                                                                         | false         |
| remote-method                     | 当输入值发生变化时被调用的函数。 其参数是当前输入值。 只有当 `filterable` 设置为 true 时才会生效。                                                                                | function(keyword: string)          | —                                                                                                         | —             |
| validate-event                    | 输入时是否触发表单的校验                                                                                                                                                          | boolean                            | -                                                                                                         | true          |
| placement                         | 下拉框出现的位置                                                                                                                                                                  | string                             | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start  |
| remote-method                     | 当输入值发生变化时被调用的函数。 其参数是当前输入值。 只有当 `filterable` 设置为 true 时才会生效。                                                                                | function(keyword: string)          | —                                                                                                         | —             |
| label-key                         | 选项的渲染模板所绑定在键名 (el-option 上显示的字段)                                                                                                                               | string                             | -                                                                                                         | text          |
| value-key                         | 作为 value 唯一标识的键名，绑定值为对象类型时必填                                                                                                                                 | string                             | -                                                                                                         | value         |

## Events

| 事件名         | 说明                                     |
| -------------- | ---------------------------------------- |
| change         | 选中值发生变化时触发                     |
| visible-change | 下拉框出现/隐藏时触发                    |
| remove-tag     | 多选模式下移除 tag 时触发                |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 |
| blur           | 当选择器的输入框失去焦点时触发           |
| focus          | 当选择器的输入框获得焦点时触发           |

## Slots

| 插槽名  | 说明                     |
| ------- | ------------------------ |
| default | 自定义 Option 模板       |
| empty   | 自定义当选项为空时的内容 |
| prefix  | 输入框的前缀             |
