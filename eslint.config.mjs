import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        languageOptions: { globals: globals.node },
        plugins: {
            tseslint: tseslint,
            eslintPluginPrettier: eslintPluginPrettier,
        },
        rules: {
            'no-var': 'error',
            semi: 'error',
            indent: ['error', 4, { SwitchCase: 1 }],
            'no-multi-spaces': 'error',
            'space-in-parens': 'error',
            'no-multiple-empty-lines': 'error',
            'prefer-const': 'error',
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
