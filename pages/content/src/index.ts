import { listenToProductsContainer, removePromoted } from '@extension/shared';

removePromoted();
listenToProductsContainer(() => {
  removePromoted();
});
