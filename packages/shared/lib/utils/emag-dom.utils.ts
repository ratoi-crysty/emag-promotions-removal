import $ from 'jquery';

export function getPromotedProducts(): JQuery {
  return $('.extra-badge-promo').parents('.js-product-data').remove();
}

export function getProductsContainer(): JQuery {
  return $('.js-products-container');
}

export function listenToProductsContainer(listener: MutationCallback) {
  const observer = new MutationObserver(listener);

  observer.observe(getProductsContainer()[0], {
    subtree: true,
    childList: true,
  });
}

export function removePromoted(): void {
  getPromotedProducts().remove();
}
