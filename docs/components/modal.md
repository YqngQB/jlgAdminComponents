# Modal

基于 vxe-modal 组件的封装，用于弹出对话框。保留了 vxe-modal 常用属性与方法，扩展了动态加载与最小化功能。

## 如何引入

- 在 `app.vue` 中使用, 引入 `jlg-modals-container` 组件。

```vue
<template>
  <jlg-modals-container ref="modalsContainer" />
</template>

<script lang="ts" setup>
import {JlgModalsContainer} from 'jlg-admin-components'
</script>
```
- 在需要弹出对话框的vue文件中，引入 `$jdm` 方法，动态创建modal。

```vue
<template>
  <el-button type="primary" @click="openModal">打开弹窗</el-button>
</template>

<script lang="ts" setup>
import ModalDemo from '../xx/xx/xx/index.vue'
import {$jdm} from 'jlg-admin-components'

const openModal = (id: number) => {
  $jdm.show({
    component: ModalDemo,
    bind: {
      title: '弹窗A',
      width: '40%',
      beforeCloseMethod: () => {
        return new Promise((resolve) => {
          ElMessageBox.confirm('确定要关闭弹窗2吗？', '提示', {
            confirmButtonText: 'yes',
            cancelButtonText: 'no',
            type: 'warning'
          })
              .then(() => {
                resolve(true)
              })
              .catch(() => {
                resolve(new Error())
              })
        })
      }
    },
    on: {
      customEvent: (data) => {
        console.log(data)
      },
      hide: () => {
        console.log('hide')
      },
      close: (data) => {
        console.log('close', data)
      }
    }
  })
}
</script>
```

- `name` - Modal 组件的唯一标识，请确保全局唯一，如果不填默认 `component`组件 name
- `component` - 导入的 Vue 组件
- `on` -Modal组件 prop属性
- `bind` -Modal事件处理程序

###  on 内置属性说明

```typescript
type UseModalOptionsPrivate<
	ModalProps extends ComponentProps = {
		/**
		 * 窗口的标题
		 * */
		title?: string
		/**
		 * 窗口的类型
		 * */
		type?: string
		/**
		 * 窗口的宽度
		 */
		width?: string | number
		/**
		 * 窗口的高度
		 */
		height?: string | number
		/**
		 * 窗口的最小宽度
		 */
		minWidth?: string | number
		/**
		 * 窗口的最小高度
		 */
		minHeight?: string | number
		/**
		 * 窗口的最大宽度
		 */
		maxWidth?: string | number
		/**
		 * 是否显示遮罩层
		 * */
		mask?: boolean
		/**
		 * 是否允许点击遮罩层隐藏窗口
		 * */
		maskClosable?: boolean
		/**
		 * 是否允许按 Esc 键隐藏窗口
		 */
		escClosable?: boolean
		/**
		 * 是否锁住页面，不允许窗口之外的任何操作,默认 false
		 */
		lockView?: boolean
		/**
		 * 是否标显示最大化与还原按钮
		 */
		showZoom?: boolean
		/**
		 * 确认按钮的文本
		 * */
		confirmButtonText?: string
		/**
		 * 取消按钮的文本
		 */
		cancelButtonText?: string
		/**
		 * 在窗口隐藏（最小化）之前执行，可以返回 Error 阻止关闭，支持异步
		 */
		beforeHideMethod?: () => Error | Promise<any>
		/**
		 * 在窗口关闭（销毁）之前执行，可以返回 Error 阻止关闭，支持异步
		 */
		beforeCloseMethod?: () => Error | Promise<any>
		/**
		 * 其他参数
		 */
		[key: string]: any
	}
```




### bind 内置选项

#### `@show`

在Modal变为可见或开始转换后发出.

---

#### `@submit`

点击提交按钮触发

---
#### `@close`

在Modal关闭时发出

---
#### `@hide`

在Modal最小化时发出

---