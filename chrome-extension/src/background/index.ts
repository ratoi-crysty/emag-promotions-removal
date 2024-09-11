import 'webextension-polyfill';
import { enabledStorage } from '@extension/storage';

enabledStorage.get().then(theme => {
  console.log('theme', theme);
});

console.log('background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
