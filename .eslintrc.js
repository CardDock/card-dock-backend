module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'eslint-plugin-nestjs',
		'simple-import-sort',
		'unicorn',
		'node',
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:nestjs/recommended',
		'plugin:unicorn/recommended',
		'plugin:node/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off', // Desactiva el prefijo de nombre de interfaz
		'@typescript-eslint/explicit-function-return-type': 'error', // Requiere que las funciones tengan un tipo de retorno explícito
		'@typescript-eslint/explicit-module-boundary-types': 'error', // Requiere que los tipos de los límites del módulo sean explícitos
		'@typescript-eslint/no-explicit-any': 'error', // Prohíbe el uso de 'any' explícito
		'nestjs/use-validation-pipe': 'error', // Requiere el uso de ValidationPipe en NestJS
		'nestjs/use-logger': 'error', // Requiere el uso de Logger en NestJS
		'no-console': ['error', { allow: ['warn', 'error'] }], // Prohíbe el uso de console.log, permite console.warn y console.error
		'simple-import-sort/imports': 'error', // Requiere la ordenación simple de las importaciones
		'simple-import-sort/exports': 'error', // Requiere la ordenación simple de las exportaciones
		'unicorn/prefer-module': 'off', // Desactiva la preferencia por módulos en lugar de CommonJS
		'unicorn/prefer-top-level-await': 'off', // Desactiva la preferencia por await a nivel superior
		'unicorn/prevent-abbreviations': 'off', // Desactiva la prevención de abreviaciones
		'node/no-missing-import': 'off', // Desactiva la regla que prohíbe importaciones faltantes en Node.js
		'node/no-unsupported-features/es-syntax': [
			'error',
			{ ignores: ['modules'] },
		], // Requiere que las características de sintaxis de ES no soportadas sean ignoradas
		'node/no-unpublished-import': 'off', // Desactiva la regla que prohíbe importaciones no publicadas en Node.js
		'no-process-exit': 'off', // Desactiva la regla que prohíbe el uso de process.exit()
		'no-unused-vars': 'error', // Prohíbe variables no utilizadas
		'no-var': 'error', // Prefiere let/const sobre var
		'prefer-const': 'error', // Prefiere const si la variable no se reasigna
		eqeqeq: ['error', 'always'], // Requiere el uso de === y !== en lugar de == y !=
		curly: 'error', // Requiere llaves para todos los bloques
		'no-multi-spaces': 'error', // Evita múltiples espacios
		'no-trailing-spaces': 'error', // Evita espacios en blanco al final de las líneas
		'eol-last': ['error', 'always'], // Requiere una nueva línea al final del archivo
	},
	overrides: [
		{
			files: ['scripts/**'],
			rules: {
				'no-console': 'off',
			},
		},
		{
			files: ['tests/**'],
		},
	],
	env: {
		node: true,
	},
};
