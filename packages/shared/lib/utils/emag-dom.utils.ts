import $ from 'jquery';

export function getPromotedProducts(): JQuery {
  return $('.extra-badge-promo').parents('.js-product-data').remove();
}

export function getProductsContainer(): JQuery {
  return $('.js-products-container');
}

export function listenToProductsContainer(listener: MutationCallback) {
  const container: HTMLElement | undefined = getProductsContainer()[0];

  if (!container) {
    return;
  }

  const observer = new MutationObserver(listener);

  observer.observe(container, {
    subtree: true,
    childList: true,
  });
}

export function removePromoted(): void {
  getPromotedProducts().remove();
}
