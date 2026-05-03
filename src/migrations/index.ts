import * as migration_20260503_065803_initial from './20260503_065803_initial';

export const migrations = [
  {
    up: migration_20260503_065803_initial.up,
    down: migration_20260503_065803_initial.down,
    name: '20260503_065803_initial'
  },
];
