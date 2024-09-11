import { createStorage } from '../base';
import { StorageEnum } from '../enums';
import type { BaseStorage } from '../types';

const storage = createStorage<boolean>('enabled', true, {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

export interface EnabledStorage extends BaseStorage<boolean> {
  setValue: (value: boolean) => Promise<void>;
  toggle: () => Promise<void>;
}

// You can extend it with your own methods
export const enabledStorage: EnabledStorage = {
  ...storage,
  setValue: async (value: boolean) => {
    await storage.set(value);
  },
  toggle: async () => {
    await storage.set((value: boolean): boolean => !value);
  },
};
