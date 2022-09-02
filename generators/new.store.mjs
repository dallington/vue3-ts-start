import { pathTemplate } from './utils.mjs';

export default function buildNewStore(plop) {
  plop.setGenerator('Add new Store', {
    description: 'Adds new store with unit tests',
    prompts: [
      {
        type: 'input',
        name: 'storeId',
        message: 'Name/Id of store: '
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stores/{{snakeCase storeId}}.ts',
        templateFile: pathTemplate('store.ts.hbs')
      },
      {
        type: 'add',
        path: 'src/stores/{{snakeCase storeId}}.test.ts',
        templateFile: pathTemplate('store.test.ts.hbs')
      }
    ]
  })
}
