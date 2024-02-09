import React from "react";

import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import { CollectionPreview } from "../collection-preview/collection-preview";

export const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  console.log(collections);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
