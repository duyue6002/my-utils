module.exports = {
  extends: ['plugin:import/errors'],
  plugins: ['import'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],

    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],

    'comma-dangle': 'off',

    curly: 'off',

    'eol-last': ['error'],

    'keyword-spacing': ['error'],

    'max-len': [
      'error',
      {
        code: 180,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
      },
    ],

    'no-undef': 'off',

    'no-else-return': ['error'],

    'no-mixed-spaces-and-tabs': ['error'],

    'no-multiple-empty-lines': ['error'],

    'no-spaced-func': ['error'],

    'no-trailing-spaces': ['error'],

    'no-unexpected-multiline': ['error'],

    'no-unused-vars': [
      'error',
      {
        args: 'none',
        vars: 'all',
      },
    ],

    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],

    semi: ['error'],

    'space-before-blocks': ['error', 'always'],

    'space-in-parens': ['error', 'never'],

    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        overrides: {},
      },
    ],

    // 'valid-jsdoc': ['error']

    // ECMAScript 6 rules

    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    'arrow-parens': 'off',

    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],

    'no-class-assign': ['error'],

    'no-const-assign': ['error'],

    'no-dupe-class-members': ['error'],

    'no-duplicate-imports': ['error'],

    'no-new-symbol': ['error'],

    'no-useless-rename': ['error'],

    'no-var': 'off',

    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
      },
    ],

    'prefer-arrow-callback': 'off',

    'prefer-const': 'off',

    'prefer-rest-params': 'off',

    'prefer-template': 'off',

    'template-curly-spacing': ['error', 'never'],
  },
};
