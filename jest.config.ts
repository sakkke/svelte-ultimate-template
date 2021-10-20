import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => ({
  moduleFileExtensions: [
    'js',
    'svelte',
    'ts',
  ],
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.ts$': 'ts-jest',
  },
})