module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    // tell Jest to handle `*.vue` files
    'vue',
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': [
      '@vue/vue3-jest',
      {
        sourceMaps: true
      }
    ],
    // process `*.js` files with `babel-jest`
    '.*\\.(js)$': [
      'babel-jest',
      {
        sourceMaps: true
      }
    ]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    axios: 'axios/dist/node/axios.cjs',
    '\\.(css|less)$': '<rootDir>/tests/jest/__mocks__/styleMock.js'
  },
  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>/**/*.spec.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts|vue)',
    // "**/*.{js,vue}",

    '!**/node_modules/**',
    '!.eslintrc.js',
    '!babel.config.js',
    '!jest.config.js',
    '!vue.config.js',
    '!**/coverage/**'
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  coverageThreshold: {
    './src/': {
      lines: 0
    }
  },
  // '<rootDir>/node_modules/', '/node_modules/(?!@scu/vue)'
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(particles-bg-vue)|(?!@scu/vue)|(?!(vue3-lottie))/)'
  ],
  setupFiles: ['jest-canvas-mock'],
  reporters: ['default', ['jest-junit', { suiteName: 'jest tests' }]]
}
