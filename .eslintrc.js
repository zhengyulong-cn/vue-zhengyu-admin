const jsRules = {
  // Possible Errors： 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
  ...{
      // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
      'no-control-regex': 'off',

      // 客户端没必要开这个
      'no-prototype-builtins': 'off',
  },

  // Best Practices: 这些规则是关于最佳实践的，帮助你避免一些问题
  ...{
      // setter必须有getter
      'accessor-pairs': 'error',

      // 在类的非静态方法中，必须存在对 this 的引用
      'class-methods-use-this': 'warn',

      // 控制语句单行没有大括号或者多行有大括号
      'curly': [
          'warn',
          'all',
      ],

      // 要求 switch 语句中有 default 分支
      'default-case': 'warn',

      // 只能在点号之前换行
      'dot-location': [
          'warn',
          'property',
      ],

      // 尽可能使用点号而不使用中括号
      'dot-notation': 'warn',

      /**
       * 除了以下这些情况外，强制使用 === 和 !==：
       * 比较两个字面量的值
       * 比较 typeof 的值
       * 与 null 进行比较
       */
      'eqeqeq': [
          'error',
          'smart',
      ],

      // for in 内部必须有 if hasOwnProperty
      'guard-for-in': 'warn',

      // 禁止 if 语句中 return 语句之后有 else 块
      'no-else-return': 'warn',

      // 禁止空函数
      'no-empty-function': 'warn',

      // 禁用eval
      'no-eval': 'warn',

      // 禁止扩展原生类
      'no-extend-native': 'warn',

      // 禁止使用短符号进行类型转换
      'no-implicit-coercion': [
          'warn',
          {
              boolean: false,
          },
      ],

      // 禁止 this 关键字出现在类和类对象之外
      'no-invalid-this': 'warn',

      // 禁用 __iterator__ 属性
      'no-iterator': 'warn',

      /*                // 禁用魔术数字
         'no-magic-numbers': [
         'warn',
         {
         'ignore': [-1, 0, 1],
         'ignoreArrayIndexes': true,
         'enforceConst': true,
         },
         ],*/

      // 禁止使用多个空格
      'no-multi-spaces': 'warn',

      // 禁止使用斜线创建多行字符串
      'no-multi-str': 'error',

      // 禁止对 Function 对象使用 new 操作符
      'no-new-func': 'warn',

      // 禁止对 String，Number 和 Boolean 使用 new 操作符
      'no-new-wrappers': 'warn',

      // 禁止使用__proto__，已被弃用
      'no-proto': 'error',

      // 禁止在 return 语句中使用赋值语句
      'no-return-assign': 'warn',

      // 禁用不必要的 return await
      'no-return-await': 'warn',

      // 禁止自身比较
      'no-self-compare': 'warn',

      // 禁用不必要的逗号操作符
      'no-sequences': 'warn',

      // 禁止抛出异常字面量
      'no-throw-literal': 'warn',

      // 禁用一成不变的循环条件
      'no-unmodified-loop-condition': 'error',

      // 禁止出现未使用过的表达式
      'no-unused-expressions': [
          'warn',
          {
              allowShortCircuit: true,
          },
      ],

      // 禁止不必要的 .call() 和 .apply()，效率低，尽量用解构代替，
      'no-useless-call': 'warn',

      // 禁止不必要的字符串字面量或模板字面量的连接
      'no-useless-concat': 'warn',

      // 禁止多余的return
      'no-useless-return': 'warn',

      // 禁止使用不带 await 表达式的 async 函数
      'require-await': 'warn',

      // 需要把立即执行的函数包裹起来
      'wrap-iife': 'warn',
  },

  // Variables: 这些规则与变量声明有关
  ...{
      // 禁止在变量定义之前使用它们
      'no-use-before-define': [
          'error',
          {
              functions: false,
          },
      ],
  },

  // Stylistic Issues: 这些规则是关于风格指南的
  ...{
      // 强制在数组开括号后和闭括号前出现换行，对每个括号要求使用一致的换行符
      'array-bracket-newline': [
          'warn',
          'consistent',
      ],

      // 禁止在数组括号内侧加空格
      'array-bracket-spacing': 'warn',

      // 强制数组元素间出现换行，需要一致地使用数组元素之间的换行符
      'array-element-newline': [
          'warn',
          'consistent',
      ],

      // 强制在代码块中开括号前和闭括号后有空格
      'block-spacing': 'warn',

      // 大括号开括号后闭括号前必须换行，单行除外
      'brace-style': [
          'warn',
          '1tbs',
          {
              allowSingleLine: true,
          },
      ],

      // 对象的最后一个属性末尾的逗号
      'comma-dangle': [
          'warn',
          'always-multiline', // 多行时必须有
      ],

      // 逗号后面必须加空格
      'comma-spacing': 'warn',

      // 只能在逗号后换行
      'comma-style': 'warn',

      // 禁止在计算属性内使用空格
      'computed-property-spacing': 'warn',

      // 禁止在函数标识符和其调用之间有空格
      'func-call-spacing': 'warn',

      // 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行。
      'function-paren-newline': 'warn',

      // 禁止在箭头函数体之前出现换行
      'implicit-arrow-linebreak': 'warn',

      // 缩进
      'indent': [
          'warn',
          4,
          {
              SwitchCase: 1,
          },
      ],

      // 强制所有不包含双引号的 JSX 属性值使用双引号
      'jsx-quotes': 'warn',

      // 对象字面量中冒号前面禁止有空格，后面必须有空格
      'key-spacing': 'warn',

      // 关键字前后必须有空格
      'keyword-spacing': 'warn',

      // 每行最大长度
      'max-len': [
          'warn', {
              code: 220,
              tabWidth: 4,
              ignoreUrls: true,
              ignoreStrings: true,
              ignoreTemplateLiterals: true,
          },
      ],

      // 每一行中最多只能有2条语句
      'max-statements-per-line': [
          'error',
          {
              max: 2,
          },
      ],

      // new 后面的类名必须首字母大写
      'new-cap': 'off',

      // 要求调用无参构造函数时带括号
      'new-parens': 'warn',

      // 禁止 if 作为唯一的语句出现在 else 语句中
      'no-lonely-if': 'warn',

      // 禁止连续赋值，对变量连续赋值可能会导致意想不到的结果，而且难以阅读
      'no-multi-assign': 'warn',

      // 禁用 Object 的构造函数
      'no-new-object': 'warn',

      // ++ 和 -- 只允许出现在 for 循环的最后一个表达式中
      'no-plusplus': [
          'warn',
          {
              allowForLoopAfterthoughts: true,
          },
      ],

      // 禁止使用with
      'no-restricted-syntax': [
          'warn',
          'WithStatement',
      ],

      // 禁止使用tab
      'no-tabs': 'warn',

      // 禁止可以表达为更简单结构的三元操作符
      'no-unneeded-ternary': 'warn',

      // 禁止属性前有空格，比如 foo. bar()
      'no-whitespace-before-property': 'warn',

      // 禁止单行语句之前有换行
      'nonblock-statement-body-position': 'warn',

      // 强制在花括号内使用一致的换行符，如果在属性内部或属性之间有换行符，就要求有换行符
      'object-curly-newline': [
          'warn',
          {
              multiline: true,
              consistent: true,
          },
      ],

      // 单行大括号内部首尾必须有空格
      'object-curly-spacing': [
          'warn',
          'always',
      ],

      // 对象的属性要么都同行要么都不同行
      'object-property-newline': [
          'warn',
          {
              allowAllPropertiesOnSameLine: true,
          },
      ],

      // 需要换行的时候，操作符必须放在行首
      'operator-linebreak': [
          'warn',
          'before',
      ],

      // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
      'prefer-object-spread': 'warn',

      // 如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号
      'quote-props': [
          'warn',
          'consistent-as-needed',
      ],

      // 尽可能地使用单引号
      'quotes': [
          'warn',
          'single',
      ],

      // 尽可能不使用分号
      'semi': [
          'warn',
          'never',
      ],

      // 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
      'semi-spacing': 'warn',

      // 分号必须写在行尾，禁止在行首出现
      'semi-style': 'warn',

      // 语句块之前必须有空格
      'space-before-blocks': 'warn',

      // 命名的函数表达式左括号前不得有空格，匿名函数和箭头函数左括号前必须有空格
      'space-before-function-paren': [
          'warn',
          {
              anonymous: 'always',
              named: 'never',
              asyncArrow: 'always',
          },
      ],

      // 小括号内的首尾禁止有空格
      'space-in-parens': 'warn',

      // 操作符左右必须有空格
      'space-infix-ops': 'warn',

      // new, typeof 等后面必须有空格，++, -- 等禁止有空格
      'space-unary-ops': 'warn',

      // 注释的斜线或 * 后必须有空格
      'spaced-comment': 'warn',

      // switch 语句中的 case 和 default的冒号前禁止有空格，冒号后必须有空格
      'switch-colon-spacing': 'warn',

      // 禁止在模板标记和它们的字面量之间有空格
      'template-tag-spacing': 'warn',

      // 文件开头禁止有 BOM
      'unicode-bom': 'warn',

      // 禁止多个连续空行
      'no-multiple-empty-lines': ['warn', { max: 1 }],
  },

  // ECMAScript 6: 这些规则只与 ES6 有关, 即通常所说的 ES2015
  ...{
      // 当箭头函数大括号是可以省略的，强制不使用它们
      'arrow-body-style': 'warn',

      // 箭头函数的参数的圆括号在可以的地方强制不使用
      'arrow-parens': [
          'warn',
          'as-needed',
      ],

      // 箭头函数的箭头之前或之后有一个或多个空格
      'arrow-spacing': 'warn',

      // 禁止重复导入
      'no-duplicate-imports': 'warn',

      // 禁止在对象中使用不必要的计算属性
      'no-useless-computed-key': 'warn',

      // 禁用不必要的构造函数
      'no-useless-constructor': 'warn',

      // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
      'no-useless-rename': 'warn',

      // 要求使用 let 或 const 而不是 var
      'no-var': 'warn',

      // 要求使用 const 声明那些声明后不再被修改的变量
      'prefer-const': 'warn',

      // 要求使用剩余参数而不是 arguments
      'prefer-rest-params': 'warn',

      // 要求使用扩展运算符而非 .apply()
      'prefer-spread': 'warn',

      // 剩余和扩展运算符及其表达式之间不得有空格
      'rest-spread-spacing': 'warn',

      // 禁止模板字符串中的嵌入表达式周围空格的使用
      'template-curly-spacing': 'warn',

      // 对 import 排序
      'import/order': [
          'warn',
          {
              'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
              'pathGroups': [
                  {
                      pattern: '@?(playground|email|appCommon|apis|oa)/**',
                      group: 'internal',
                  },
              ],
              'pathGroupsExcludedImportTypes': ['builtin'],
              'newlines-between': 'always',
              'alphabetize': { order: 'asc' },
          },
      ],
      'import/no-dynamic-require': 'warn',
  },
}

const vueRules = {
  // Priority B: Strongly Recommended
  ...{
      // template缩进
      'vue/html-indent': [
          'warn',
          4,
      ],

      // 控制标签是否在为空时必须自己闭合 <XXX />
      // 当前对于 html 原生标签不作任何限制 （由 html 书写规则控制该标签是否需要自闭合）
      // 当前对于 Vue 组件标签 进行限制 （没有内容时自闭合）
      'vue/html-self-closing': [
          'warn', {
              html: {
                  void: 'always',
                  normal: 'never',
                  component: 'always',
              },
              svg: 'always',
              math: 'always',
          },
      ],

      // 模板中attr要么都换行要么都不换
      'vue/max-attributes-per-line': [
          'error', {
              // 这里本质是设置 Infinity
              // 但是 Infinity 新版 eslint 报错，所以改为 100
              singleline: { max: 1 },
              multiline: { max: 1 },
          },
      ],

      // 允许 div 等块级标签写在一行 (<div class="title"> appName </div>)
      'vue/singleline-html-element-content-newline': 'off',
  },

  // Un categorized
  ...{
      // 禁止在数组括号内侧加空格
      'vue/array-bracket-spacing': 'warn',

      // 箭头函数的箭头之前或之后有一个或多个空格
      'vue/arrow-spacing': 'warn',

      // 强制在代码块中开括号前和闭括号后有空格
      'vue/block-spacing': 'warn',

      // 大括号开括号后闭括号前必须换行
      'vue/brace-style': 'warn',

      // 对象的最后一个属性末尾的逗号
      'vue/comma-dangle': [
          'warn',
          'always-multiline', // 多行时必须有
      ],

      // 自定义组件名必须用大驼峰格式
      'vue/component-definition-name-casing': 'warn',

      // template内组件名用大驼峰格式
      'vue/component-name-in-template-casing': 'warn',

      // 组件内tag顺序
      'vue/component-tags-order': [
          'warn',
          {
              order: ['template', 'script', 'style'],
          },
      ],

      // 只能在点号之前换行
      'vue/dot-location': [
          'warn',
          'property',
      ],

      /**
       * 除了以下这些情况外，强制使用 === 和 !==：
       * 比较两个字面量的值
       * 比较 typeof 的值
       * 与 null 进行比较
       */
      'vue/eqeqeq': [
          'error',
          'smart',
      ],

      // 对象字面量中冒号前面禁止有空格，后面必须有空格
      'vue/key-spacing': 'warn',

      // 关键字前后必须有空格
      'vue/keyword-spacing': 'warn',

      // 组件名必须与文件名相同
      'vue/match-component-file-name': [
          'error',
          {
              extensions: ['jsx', 'vue'],
              shouldMatchCase: true,
          },
      ],
      // 每行最大长度
      'vue/max-len': [
          'warn', {
              code: 240,
              tabWidth: 4,
              ignoreUrls: true,
              ignoreStrings: true,
              ignoreTemplateLiterals: true,
              ignoreHTMLAttributeValues: true,
              ignoreHTMLTextContents: true,
          },
      ],

      // 布尔值变量必须没有默认值或默认值为false (不是太符合现状 该条关闭)
      'vue/no-boolean-default': 'off',

      // 禁止使用已弃用的scope
      'vue/no-deprecated-scope-attribute': 'warn',

      // 禁止使用已弃用的slot
      'vue/no-deprecated-slot-attribute': 'warn',

      // 禁止使用已弃用的slot-scope
      'vue/no-deprecated-slot-scope-attribute': 'warn',

      // 禁止使用尚未支持的特性
      'vue/no-unsupported-features': 'error',

      // 禁止使用空解构表达式
      'vue/no-empty-pattern': 'warn',

      // 禁止使用非法空白符
      'vue/no-irregular-whitespace': 'warn',

      // 禁止使用with
      'vue/no-restricted-syntax': [
          'warn',
          'WithStatement',
      ],

      // 组件名不能与html标准元素重名
      'vue/no-reserved-component-names': 'warn',

      // 禁止使用静态行内style
      // 'vue/no-static-inline-styles': 'off',

      // 单行大括号内部首尾必须有空格
      'vue/object-curly-spacing': [
          'warn',
          'always',
      ],

      // 组件必须有name
      'vue/require-name-property': 'warn',

      // 组件必须直接用export default导出
      'vue/require-direct-export': 'off',

      // 操作符左右必须有空格
      'vue/space-infix-ops': 'warn',

      // new, typeof 等后面必须有空格，++, -- 等禁止有空格
      'vue/space-unary-ops': 'warn',

      // v-slot使用方式
      'vue/v-slot-style': [
          'warn',
          {
              atComponent: 'v-slot',
              default: 'shorthand',
              named: 'shorthand',
          },
      ],

      // 保证v-bind.sync合法
      'vue/valid-v-bind-sync': 'error',

      // 保证v-slot合法
      'vue/valid-v-slot': 'warn',
  },
}

const tsRules = {
  // 这两个强制写返回类型的关掉
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  '@typescript-eslint/member-delimiter-style': [
      'error',
      {
          multiline: {
              delimiter: 'none',
              requireLast: true,
          },
          singleline: {
              delimiter: 'comma',
              requireLast: false,
          },
      },
  ],

  '@typescript-eslint/no-explicit-any': 'off',

  // 下方 no-use-before-define 要先关掉，这是官方建议的，否则会出问题
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
      'error',
      {
          functions: false,
      },
  ],
  '@typescript-eslint/ban-ts-comment': 'warn',

  // 对象 及 enum 的最后一个属性末尾的逗号
  '@typescript-eslint/comma-dangle': [
      'warn',
      'always-multiline', // 多行时必须有
  ],
}

module.exports = {
  env: {
      browser: true, // 浏览器环境中的全局变量
      node: true, // Node.js 全局变量和 Node.js 作用域。
      es2020: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
      commonjs: true, // CommonJS 全局变量和 CommonJS 作用域
      jest: true, // Jest 全局变量
  },
  extends: [
      'eslint:recommended',
      'plugin:vue/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
  ],
  // 脚本执行期间访问的额外的全局变量
  globals: {
      BRANCH_NAME: 'readonly',
      PRODUCTION: 'readonly',
      VERSION_INFO: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
      ecmaFeatures: {
          globalReturn: false, // 不允许在全局作用域下使用 return 语句
          impliedStrict: true, // 启用全局 strict mode
          jsx: true, // 启用 JSX
          legacyDecorators: true,
      },
      // parser: 'babel-eslint', // 普通项目，无TS时选用
      parser: '@typescript-eslint/parser', // TS项目
      // parser: 'vue-eslint-parser',
      // parser: '@babel/eslint-parser',
  },
  plugins: [
      'import',
  ],
  rules: {
      ...jsRules,
      ...vueRules,
      ...tsRules,
  },
}
