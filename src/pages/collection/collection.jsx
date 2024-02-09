import React from "react";
import { useParams } from "react-router-dom";
import { CollectionItem } from "../../component/collection-item/collection-item";
import { useSelector } from "react-redux";
import { selectCollections } from "../../redux/shop/shopSelectors";
export const CollectionPage = () => {
  const { id } = useParams();

  const collection = useSelector(selectCollections(id));
  console.log(collection)
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
