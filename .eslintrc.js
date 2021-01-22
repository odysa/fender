module.export = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // Customize your rules
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};
