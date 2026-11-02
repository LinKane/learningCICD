import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,          // 套用官方推薦規則
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',        // 我們用 import/export
      globals: globals.node,       // Node 環境的全域變數
    },
  },
]