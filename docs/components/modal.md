# Modal

基于 vxe-modal 组件的封装，用于弹出对话框。保留了 vxe-modal 常用属性与方法，扩展了动态加载与最小化功能。

## 用法示例

- 在 `app.vue` 中使用, 引入 `jlg-modals-container` 组件。

```vue
<template>
  <jlg-modals-container ref="modalsContainer" />
</template>

<script lang="ts" setup>
import {JlgModalsContainer} from 'jlg-admin-components'
</script>
```
- 在需要弹出对话框的vue文件中使用，引入 `$jdm` 方法。

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