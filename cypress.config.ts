import {defineConfig} from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            return {
                ...config,
                browsers: config.browsers.filter((browser) => browser.family === 'chromium' && browser.name === 'electron'),
            }
        },
        specPattern: 'cypress/tests/e2e/**/*.spec.ts',
    },
    component: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            return {
                ...config,
                browsers: config.browsers.filter((browser) => browser.family === 'chromium' && browser.name === 'electron'),
            }
        },
        specPattern: 'cypress/tests/component/**/*.spec.ts',
        devServer: {
            framework: 'angular',
            bundler: 'webpack',
        },
    },
    chromeWebSecurity: false,
    video: false,
});
