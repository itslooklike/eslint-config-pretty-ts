module.exports = {
  env: {
    webextensions: true,
    browser: true,
    jest: true,
  },
  globals: {
    React: true,
  },
  plugins: [
    `@typescript-eslint/eslint-plugin`,
    `eslint-plugin-unicorn`,
    `eslint-plugin-prettier`,
    `eslint-plugin-react-hooks`,
  ].map(require.resolve),
  extends: [
    `eslint:recommended`,
    `plugin:@typescript-eslint/recommended`,
    `airbnb`,
    `plugin:unicorn/recommended`,
    `plugin:prettier/recommended`,
    `prettier`,
  ],
  parser: `@typescript-eslint/parser`,
  rules: {
    curly: [`error`, `all`],
    quotes: [`error`, `backtick`],
    camelcase: `off`,
    'no-shadow': `off`,
    'no-irregular-whitespace': `off`,
    'no-underscore-dangle': `off`,
    'no-unused-vars': `off`, // его обрабатывает @typescript-eslint/no-unused-vars
    'no-use-before-define': `off`,

    'jsx-a11y/label-has-associated-control': `off`,
    'jsx-a11y/click-events-have-key-events': `off`,
    'jsx-a11y/no-static-element-interactions': `off`,
    'jsx-a11y/no-noninteractive-element-interactions': `off`,

    '@typescript-eslint/no-use-before-define': `error`,
    '@typescript-eslint/explicit-module-boundary-types': `off`,
    '@typescript-eslint/indent': `off`,
    '@typescript-eslint/no-unused-vars': `error`,
    '@typescript-eslint/no-shadow': `error`,

    'react/react-in-jsx-scope': `off`,
    'react/prop-types': `off`,
    'react/require-default-props': `off`,
    'react/no-unescaped-entities': `off`,
    'react/no-array-index-key': `off`,
    'react/jsx-handler-names': 2,
    'react/jsx-filename-extension': [2, { extensions: [`.js`, `.jsx`, `.ts`, `.tsx`] }],

    'import/prefer-default-export': `off`,
    'import/extensions': [
      `error`,
      `ignorePackages`,
      { js: `never`, jsx: `never`, ts: `never`, tsx: `never` },
    ],

    'unicorn/no-null': `off`,
    'unicorn/no-array-callback-reference': `off`,
    'unicorn/no-array-reduce': `off`,
    'unicorn/new-for-builtins': `off`,
    'unicorn/numeric-separators-style': [`error`, { number: { minimumDigits: 0, groupLength: 3 } }],
    'unicorn/filename-case': `off`,
  },
  overrides: [
    {
      files: [`*.stories.*`],
      rules: {
        'no-shadow': 0,
        'import/no-extraneous-dependencies': 0,
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/no-use-before-define': 0,
      },
    },
    {
      files: [`*.d.ts`],
      rules: {
        quotes: 0,
      },
    },
    {
      files: [`./*.js`],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        'unicorn/prefer-module': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
