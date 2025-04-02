import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // 忽略dist目录
  { ignores: ['dist'] },
  {
    // 继承js推荐的规则和ts推荐的规则
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended
    ],
    files: ['**/*.{ts,tsx}'],
    // 语言选项
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    },
  },
)
