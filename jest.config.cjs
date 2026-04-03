module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'commonjs',
          target: 'ES2022',
          esModuleInterop: true,
          resolveJsonModule: true,
          strict: true,
          noImplicitAny: false
        }
      }
    ],
    'node_modules/.+\\.js$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'commonjs',
          target: 'ES2022',
          esModuleInterop: true,
          allowJs: true
        }
      }
    ]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@actions|@octokit|@azure|@typespec|universal-user-agent|before-after-hook|undici|json-with-bigint|fast-xml-parser|fast-xml-builder|strnum|path-expression-matcher)/)'
  ],
  moduleNameMapper: {
    '^@actions/cache$': '<rootDir>/node_modules/@actions/cache/lib/cache.js',
    '^@actions/core$': '<rootDir>/node_modules/@actions/core/lib/core.js',
    '^@actions/exec$': '<rootDir>/node_modules/@actions/exec/lib/exec.js',
    '^@actions/github$': '<rootDir>/node_modules/@actions/github/lib/github.js',
    '^@actions/glob$': '<rootDir>/node_modules/@actions/glob/lib/glob.js',
    '^@actions/http-client$': '<rootDir>/node_modules/@actions/http-client/lib/index.js',
    '^@actions/http-client/(.*)$': '<rootDir>/node_modules/@actions/http-client/$1',
    '^@actions/io$': '<rootDir>/node_modules/@actions/io/lib/io.js',
    '^@actions/io/(.*)$': '<rootDir>/node_modules/@actions/io/$1',
    '^@actions/tool-cache$': '<rootDir>/node_modules/@actions/tool-cache/lib/tool-cache.js',
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  verbose: true
}