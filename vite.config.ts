import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { terser } from 'rollup-plugin-terser'
import { defineConfig } from 'vite'

const lifecycle = process.env.npm_lifecycle_event

function getConfigs(): any {
	return lifecycle === 'lib'
		? {
				publicDir: false,
				build: {
					lib: {
						entry: path.resolve(__dirname, 'packages/index.ts'),
						name: 'jlg-admin-components',
						fileName: (format: string) => `index.${format}.js`
					},
					// https://rollupjs.org/guide/en/#big-list-of-options
					rollupOptions: {
						treeshake: true,
						external: ['vue', 'element-plus'],
						output: {
							globals: {
								vue: 'vue',
								'element-plus': 'elementPlus'
							},
							exports: 'named'
						},
						plugins: [terser({ compress: { drop_console: true } })]
					}
				}
		  }
		: {
				base: '/jlg-admin-components/',
				build: {
					sourcemap: false,
					chunkSizeWarningLimit: 4000
				}
		  }
}

// https://cn.vitejs.dev/guide/build.html#library-mode
export default defineConfig({
	plugins: [vue(), vueJsx(), svgLoader()],
	server: {
		port: '9708',
		host: '0.0.0.0'
	},
	...getConfigs()
})
