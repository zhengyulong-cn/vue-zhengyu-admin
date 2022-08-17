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
  },
  plugins: [
      'import',
  ],
  rules: {
  },
}
