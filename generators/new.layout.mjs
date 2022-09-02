import { pathTemplate } from './utils.mjs';

function buildNewLayout(plop) {
  plop.setGenerator('Add new Layout', {
    description: 'Adds new layout template',
    prompts: [
      {
        type: 'input',
        name: 'layoutName',
        message: 'Name of layout: '
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/layouts/{{snakeCase layoutName}}.vue',
        templateFile: pathTemplate('layout.vue.hbs')
      },
    ]
  })
}

export default buildNewLayout;
