module.exports = {
    ignorePatterns: [
        'coverage',
        'dist',
        'node_modules',
        '.eslintrc.js',
    ],
    overrides: [
        {
            files: ['*.js'],
            extends: [
                'eslint:recommended',
            ],
        },
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['tsconfig.json'],
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
            ],
            rules: {
                '@typescript-eslint/explicit-member-accessibility': 'error',
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowExpressions: true,
                    },
                ],
                '@typescript-eslint/strict-boolean-expressions': [
                    'error',
                    {
                        allowString: false,
                        allowNumber: false,
                        allowNullableObject: false,
                        allowNullableBoolean: false,
                        allowNullableString: false,
                        allowNullableNumber: false,
                        allowNullableEnum: false,
                        allowAny: false,
                        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
                    },
                ],
            },
        },
        {
            files: ['cypress/support/**/*.ts'],
            rules: {
                '@typescript-eslint/no-namespace': 'off',
            },
        },
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended',
            ],
        },
    ],
}
