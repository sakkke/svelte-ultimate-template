import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => ({
  moduleFileExtensions: [
    'js',
    'svelte',
    'ts'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.ts$': 'ts-jest'
  }
})
