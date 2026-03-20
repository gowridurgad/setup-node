module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@octokit/core|@octokit/auth-token|@octokit/endpoint|@octokit/graphql|@octokit/plugin-paginate-rest|@octokit/plugin-rest-endpoint-methods|@octokit/request-error|@octokit/request|universal-user-agent|before-after-hook)/)'
  ],
  verbose: true
}
