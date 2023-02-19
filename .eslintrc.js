module.exports = {
    ignorePatterns: [
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
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
            ],
        },
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended',
            ],
        },
    ],
}
