module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        // Override module to CommonJS for test compilation: the source tsconfig targets
        // ESNext (for ncc bundling), but Jest's CJS loader requires CommonJS output.
        tsconfig: {
          module: 'CommonJS',
          moduleResolution: 'node'
        }
      }
    ]
  },
  verbose: true
}
