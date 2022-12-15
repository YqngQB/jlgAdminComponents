# 安装

## npm 安装

推荐使用 pnpm 安装。

```vue
npm i jlg-admin-components -s
```

## 引入

::: tip
jlg-admin-components 依赖 element-plus，所以需要先引入 element-plus。
:::

**完整引入示例**

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import jlgAdminComponents from 'jlg-admin-components'

import 'jlg-admin-components/dist/style.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus).use(jlgAdminComponents)
app.mount('#app')
```

以上代码便完成了 jlg-admin-components 的引入。需要注意的是，样式文件需要单独引入。

### VsCode 支持

如果您使用 `Volar`，请在 `tsconfig.json` 中通过 compilerOptions.type 指定全局组件类型。

```json
{
	"compilerOptions": {
		"types": ["jlg-admin-components/global"]
	}
}
```

::: tip
缺陷：二次封装`ElementPlus`组件时使用了 `$attrs` 属性透传，导致`ElementPlus`组件部分原生属性无法获得`Volar`的代码提示。
:::


### WebStorm 类型支持
针对 WebStorm，组件库提供了完善的类型提示，不需要额外配置。

## 全局配置

~~jlg-admin-components 提供了全局配置，可以在 main.ts 中进行配置。~~
