import type {Config} from 'jest';

const jestConfig: Config = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
};

export default jestConfig;
