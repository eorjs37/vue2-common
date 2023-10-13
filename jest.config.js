module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    // tell Jest to handle `*.vue` files
    "vue",
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": ["vue-jest",
      {
        "sourceMaps": true
      }],
    // process `*.js` files with `babel-jest`
    ".*\\.(js)$": ["babel-jest",
      {
        "sourceMaps": true
      }]
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "axios": "axios/dist/node/axios.cjs",
    '\\.(css|less)$': '<rootDir>/tests/jest/__mocks__/styleMock.js'
  },
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "<rootDir>/**/*.spec.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts|vue)',
    // "**/*.{js,vue}",

    "!**/node_modules/**",
    "!.eslintrc.js",
    "!babel.config.js",
    "!jest.config.js",
    "!vue.config.js",
    "!**/coverage/**"
  ],
  // '<rootDir>/node_modules/', '/node_modules/(?!@scu/vue)'
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(particles-bg-vue)|(?!@scu/vue)/)'],

}
