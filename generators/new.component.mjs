import { pathTemplate } from './utils.mjs';

const initialDir = 'components';

function buildNewComponent(plop) {
  plop.setGenerator('Add new Component', {
    description: 'Add component with stories, constants, hook, helpers and test',
    prompts: async function (inquirer) {
      return inquirer
        .prompt([
          {
            type: 'input',
            name: 'componentName',
            message: 'Name of Component: '
          },
          {
            type: 'list',
            name: 'typeComponent',
            choices: ['Normal', 'Atomic'],
            default: 'Atom',
            message: 'Type of Component:'
          },
          {
            type: 'list',
            name: 'typeComponentAtomic',
            choices: ['Atom', 'Molecules', 'Organisms'],
            default: 'Atom',
            message: 'Type of Atomic Component:',
            when: (answers) => answers.typeComponent == 'Atomic'
          },
          {
            type: 'checkbox',
            name: 'filesComponent',
            choices: ['stories', 'constants', 'composables', 'helpers', 'test', 'types'],
            default: '',
            message: 'Files of Component:'
          },
        ])

    },
    actions: function (data) {

      function pathComponent() {
        const componentName = '{{pascalCase componentName}}';
        return (data.typeComponentAtomic) ? `{{pascalCase typeComponentAtomic}}/${componentName}/` :  componentName
      }

      function componentName() {
        return '{{pascalCase componentName}}'
      }

      const actions = [
        {
          type: 'add',
          path: `src/components/${pathComponent()}index.ts`,
          templateFile: pathTemplate('component.index.hbs')
        },
        {
          type: 'add',
          path: `src/components/${pathComponent()}${componentName()}.vue`,
          templateFile: pathTemplate('component.vue.hbs')
        }
      ]

      if(data.filesComponent.length) {
        for (let fileFeat of data.filesComponent) {
          if(fileFeat === 'composables') {
            actions.push(
              {
                type: 'add',
                path: `src/${initialDir}/${pathComponent()}/use${componentName()}.ts`,
                templateFile: pathTemplate(`component.${fileFeat}.ts.hbs`)
              });
          } else {
            actions.push(
              {
                type: 'add',
                path: `src/${initialDir}/${pathComponent()}${componentName()}.${fileFeat}.ts`,
                templateFile: pathTemplate(`component.${fileFeat}.ts.hbs`)
              });
          }
        }         
      }

      return actions
    }
  })
}

export default buildNewComponent;
