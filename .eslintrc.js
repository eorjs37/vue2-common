module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "parserOptions": {
    "parser": "@babel/eslint-parser",
    "sourceType": "module"
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  "rules": {
    "comma-dangle": "off",
    "indent": "off",
    "no-nested-ternary": "warn",
    "no-unused-vars": "warn",
    "no-undef": "off",
    "vue/comment-directive": 0
  }
}
