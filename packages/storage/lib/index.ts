import { createStorage } from './base';
import type { EnabledStorage } from './stores/enabled.storage';
import { enabledStorage } from './stores/enabled.storage';
import { SessionAccessLevelEnum, StorageEnum } from './enums';
import type { BaseStorage } from './types';

export { enabledStorage, createStorage, StorageEnum, SessionAccessLevelEnum };
export type { BaseStorage, EnabledStorage };
