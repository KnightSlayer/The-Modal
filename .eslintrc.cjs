module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'import',
    'react',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-tag-spacing": ["warn", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never",
    }],
    "react/jsx-closing-tag-location": ["warn", "line-aligned"],
    "react/jsx-max-props-per-line": ["warn", { "maximum": 1, "when": "always" }],
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/jsx-closing-bracket-location": ["warn", "tag-aligned"],
    "react/jsx-one-expression-per-line": ["warn", { "allow": "single-child" }],
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": ["warn", 2],
    "no-multi-spaces": ["warn"],
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "no-async-promise-executor": ["off"],
    "comma-dangle": ["error", "always-multiline"],
    "arrow-parens": ["error", "always"],
    "object-curly-spacing": ["warn", "always"],
    "keyword-spacing": ["warn", { "before": true, "after": true }],
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
    "space-infix-ops": ["warn"],
    "comma-spacing": ["warn"],
    "brace-style": ["warn"],
    "arrow-spacing": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/space-before-blocks": "warn",
    "@typescript-eslint/func-call-spacing": "warn",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      accessibility: "explicit",
      overrides: {
        constructors: "no-public",
      },
    }],
    "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
    "@typescript-eslint/space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
    }],
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": false,
        },
      },
    ],
    "@typescript-eslint/space-infix-ops": ["warn"],
    "no-console": "warn",
    "no-debugger": "warn",
    "object-shorthand": ["error", "properties", { avoidQuotes: true }],
    "import/newline-after-import": ["error", { count: 1 }],
  },
}