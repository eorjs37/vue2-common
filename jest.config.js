module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue",
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    // process `*.js` files with `babel-jest`
    ".*\\.(js)$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "axios": "axios/dist/node/axios.cjs"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!.eslintrc.js",
    "!babel.config.js",
    "!jest.config.js",
    "!vue.config.js",
    "!**/coverage/**"
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '/node_modules/(?!@scu/vue)']
}
