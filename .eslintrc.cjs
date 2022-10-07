module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 方案1：prettier + eslint-config-prettier + eslint-plugin-prettier(推荐使用)
    'plugin:prettier/recommended'
    // "prettier" // 方案2：prettier + eslint-config-prettier
  ],
  overrides: [],
  // parser: "@typescript-eslint/parser",
  /* 指定如何解析语法。*/
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {}
}
