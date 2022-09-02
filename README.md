# WORK IN PROGRESS

# Vue3 TS Boilerplate (slim)

The goal of this project is to effectively add minimal dependencies that actually work for the vue/ts/vite ecosystem. No `insane` animation libraries here!
 
- [x] vue3
- [x] typescript
- [x] pinia for state mgmt
- [x] windicss
- [x] vue-router (generate routes automatically)
- [x] eslint
- [x] prettier
- [x] storybook
- [x] unit tests/code cov (vitest & testing library)
- [x] generators (plop)
- [x] commitlint
- [x] commitizen
- [x] husky 

testing & storybook examples: `src/components/examples`

## Folder Structure

```
src/
  ├── components/
  │   ├── comming soon
  ├── layouts/
  ├── router/
  ├── store/
  └── views/
```

## Project Setup

use npm/yarn 
node 16

```sh
npm
```

```sh
yarn
```

## Compile and Hot-Reload for Development

```sh
npm run dev
```

```sh
yarn dev
```

## Type-Check, Compile and Minify for Production

```sh
npm run build
```


```sh
yarn build
```

## Deploy

```sh
.. coming soon ..
```

## Storybook

With interaction testing

```sh
npm run storybook
```

```sh
yarn storybook
```

## Unit Tests

Using Vitest

```sh
npm run test
```

```sh
yarn test
```

## Generate new files

Create new Components/Layouts/Views/Stores  
By default adds a unit test and includes option to add story.

```sh
npm run generate
```

```sh
yarn generate
```

## Commit

Interactive bash to commit using commitlint rules

```sh
npm run commit
```

```sh
yarn commit
```
