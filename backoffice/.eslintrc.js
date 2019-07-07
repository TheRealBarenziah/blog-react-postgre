module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "semi": "error",
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "no-console": "off",
    "no-multiple-empty-lines": [1, { "max": 1 }]
  }
};