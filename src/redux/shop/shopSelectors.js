import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collection
);

export const selectCollections = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopData],
    (collections) => collections[collectionUrlParam]
  )
);


export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  collections => Object.keys(collections).map(key => collections[key])
);
