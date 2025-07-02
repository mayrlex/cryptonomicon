import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

/** @type { import("eslint").Linter.FlatConfig[] } */
export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/recommended'],

	{
		plugins: {
			'typescript-eslint': tseslint.plugin
		},

		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.vue'],
				sourceType: 'module'
			}
		},

		rules: {
			'no-duplicate-imports': 'error',
			'no-unused-vars': 'warn',
			'no-use-before-define': 'error',
			'class-methods-use-this': 'error',
			eqeqeq: ['error', 'always'],
			'func-style': ['warn', 'expression'],
			'id-length': ['warn', { min: 2 }],
			'no-else-return': ['warn', { allowElseIf: true }],
			'no-multi-assign': 'error',
			'no-new': 'error',
			'no-param-reassign': 'error',
			'no-unneeded-ternary': 'error',
			'no-var': 'error',
			'object-shorthand': 'warn',
			'one-var': ['error', 'never'],
			'prefer-const': 'warn',
			'prefer-destructuring': 'warn',
			'prefer-template': 'warn',
			yoda: 'error',

			// VUE
			'vue/html-indent': ['warn', 'tab']
		}
	},

	eslintConfigPrettier
)
