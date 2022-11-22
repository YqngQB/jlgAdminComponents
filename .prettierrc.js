module.exports = {
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, //一个tab代表几个空格数，默认为80
  useTabs: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: false, //行位是否使用分号，默认为true
  singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: true, // jsx中使用单引号代替双引号
  arrowParens: 'always', // 箭头函数参数括号 默认avoid 可选 avoid| always,avoid 能省略括号的时候就省略 例如x => x,always 总是有括号
  eslintIntegration: true, // #让prettier使用eslint的代码格式进行校验
  newlinePerChainedCall: true, // 在链式调用时，每次调用都换行
  requirePragma: false, // 是否要求文件顶部有 @prettier
  insertPragma: false, // 是否要插入 @prettier
  proseWrap: 'preserve', // 是否要换行
  htmlWhitespaceSensitivity: 'ignore', // html空格敏感度
  vueIndentScriptAndStyle: false, // vue中script和style标签是否缩进
  endOfLine: 'lf', // 结尾是 \n \r \n\r auto
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
};
