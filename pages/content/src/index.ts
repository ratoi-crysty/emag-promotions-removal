import { listenToProductsContainer, hidePromoted } from '@extension/shared';
import { enabledStorage } from '@extension/storage';

let unsubscribe: (() => void) | undefined;

enabledStorage.subscribe(() => {
  if (enabledStorage.getSnapshot()) {
    hidePromoted();
    unsubscribe = listenToProductsContainer(() => {
      hidePromoted();
    });
  } else {
    unsubscribe?.();
  }
});
