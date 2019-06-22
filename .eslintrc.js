// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    "plugin:jest/recommended",
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'plugin:react/recommended'
  ],

  plugins: ['flowtype', 'prettier'],

  globals: {
    SITE_DATA: false,
    THEME: false,
    DYNAMIC_IMAGE_MAP: false
  },

  env: {
    browser: true
  },

  rules: {
    'react/display-name': 'off',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 2,
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 2,
    'import/prefer-default-export': 2,
    'import/named': 2,
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: ['Label'],
        required: {
          some: ['id']
        },
        allowChildren: false
      }
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['error', 'info']
      }
    ],
    'no-debugger': 'error',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],

    // // Allow only special identifiers
    // // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true
      }
    ],
    'no-return-assign': [1, 'except-parens'],
    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'no-param-reassign': 'off',
    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],

    'react/forbid-prop-types': 'off',

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error'
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', './src/']
      }
    }
    // react: {
    //   version: '16.7.0',
    //   flowVersion: '3.2.0'
    // }
  }
};
