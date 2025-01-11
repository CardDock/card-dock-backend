import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginJs from '@eslint/js';

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['src/**/*.ts'],
		languageOptions: { globals: globals.node },
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn', // Permite el uso de `any`
			'semi': 'error', // Requiere punto y coma al final de las sentencias
			'prefer-const': 'error', // Sugiere usar `const` para variables que nunca se reasignan
			'no-unused-vars': [
				'error',
				{
					vars: 'all', // Verifica todas las variables, incluyendo las globales
					args: 'none', // No verifica los argumentos de las funciones
					caughtErrors: 'all', // Verifica todas las variables de errores capturados en bloques catch
					ignoreRestSiblings: false, // No ignora las variables hermanas del operador rest
					reportUsedIgnorePattern: false, // No reporta las variables que coinciden con el patrón de ignorar
					varsIgnorePattern: '^_', // Ignora variables que comiencen con "_"
					argsIgnorePattern: '^_', // Ignora variables que comiencen con "_"
				},
			],
			'eqeqeq': ['error', 'always'], // Requiere el uso de === y !== en lugar de == y !=
			'no-console': 'error', // Advierte sobre el uso de console.log()
			'curly': ['error', 'multi-line'], // Requiere llaves para bloques multilínea
			'brace-style': ['error', '1tbs', { allowSingleLine: true }], // Estilo de llaves "one true brace style"
			'array-callback-return': 'warn', // Asegura que los callbacks de métodos de array retornen un valor
			'default-case': 'error', // Requiere una cláusula `default` en los `switch`
			'dot-notation': 'error', // Prefiere la notación de punto sobre la de corchetes para acceder a propiedades
			'no-empty-function': 'off', // Advierte sobre funciones vacías
			'no-multi-spaces': 'error', // Prohíbe múltiples espacios en blanco
			'no-redeclare': 'error', // Prohíbe redeclarar variables
			'no-shadow': 'warn', // Advierte sobre declaraciones de variables en un ámbito externo
			'no-undef': 'error', // Prohíbe el uso de variables no declaradas
			'no-unreachable': 'error', // Prohíbe código inalcanzable
			'no-var': 'error', // Requiere let o const en lugar de var
			'prefer-arrow-callback': 'warn', // Sugiere usar arrow functions como callbacks
			'quotes': [
				'error',
				'single',
				{ avoidEscape: true, allowTemplateLiterals: true },
			],
			'comma-dangle': [
				'error',
				{
					arrays: 'always-multiline',
					objects: 'always-multiline',
					imports: 'always-multiline',
					exports: 'always-multiline',
					functions: 'always-multiline',
				},
			],
			'no-process-exit': 'off', // Desactiva la regla que prohíbe el uso de process.exit()
		},
	},
	{
		files: ['scripts/**/*.{js,ts}'],
		languageOptions: { globals: globals.node },
		rules: {
			'no-console': 'off',
		},
	},
	{
		files: ['test/**/**.ts'],
		languageOptions: { globals: { ...globals.node, ...globals.jest } },
		rules: {
			'no-console': 'off',
		},
	},
	{
		ignores: [
			// Compiled output
			'dist/',

			// Node
			'node_modules/',

			// IDEs and editors
			'.editorconfig',

			// Visual Studio Code
			'.vscode/',

			// Miscellaneous
			'certificates/',
			'.husky/',
			'prettier.config.js',
		],
	},
];
