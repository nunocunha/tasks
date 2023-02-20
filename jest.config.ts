import type {Config} from 'jest';

const COVERAGE_THRESHOLD: Readonly<number> = 80;

const jestConfig: Config = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            branches: COVERAGE_THRESHOLD,
            functions: COVERAGE_THRESHOLD,
            lines: COVERAGE_THRESHOLD,
            statements: COVERAGE_THRESHOLD,
        }
    }
};

export default jestConfig;
