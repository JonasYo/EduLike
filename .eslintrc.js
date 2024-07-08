// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

module.exports = {
  extends: [
    'next',
    'prettier',
    'react-app',
    'react-app/jest',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'testing-library/prefer-screen-queries': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'tailwindcss/classnames-order': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/api/**',
            group: 'internal',
          },
          {
            pattern: '~/pages/**',
            group: 'internal',
          },
          {
            pattern: '~/components/**',
            group: 'internal',
          },
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: 'internal',
          })),
          {
            pattern: '~/hooks/**',
            group: 'internal',
          },
          {
            pattern: '~/helpers/**',
            group: 'internal',
          },
          {
            pattern: '~/styles/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [
    '.git',
    '.next',
    '.vscode',
    'node_modules',
  ];
  return getDirectories(process.cwd()).filter(
    (f) => !ignoredSortingDirectories.includes(f),
  );
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}
