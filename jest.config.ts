import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/app/components/$1',
        '^@/data/(.*)$': '<rootDir>/app/data/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(customJestConfig);
