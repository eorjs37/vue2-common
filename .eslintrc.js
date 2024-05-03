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
    "vue/comment-directive": 0
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
