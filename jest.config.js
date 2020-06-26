module.exports = {
  roots: ['./src'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  moduleFileExtensions: [
    'ts', 'tsx', 'js', 'jsx', 'json', 'node',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './src/enzyme.setup.tsx'
  ],
  modulePaths: [
    '<rootDir>/src',
  ],
  coverageDirectory: "test-coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleDirectories: ["node_modules", "src"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
