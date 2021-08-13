# eslint-config-pretty-ts

ESlint bundle with TS, React, Prettier etc. support

## install

```sh
npm add -D eslint-config-pretty-ts
yarn add -D eslint-config-pretty-ts
```

```js
// .eslintrc.js
module.exports = {
  extends: ['pretty-ts'],
}
```

```sh
npx eslint 'src/**/*.{js,jsx,ts,tsx}'
npx eslint --fix 'src/**/*.{js,jsx,ts,tsx}'

npx prettier --check .
npx prettier --write 'src/**/*.{js,jsx,ts,tsx,svelte,json}'
```
