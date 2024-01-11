import React, { Component } from "react";
import { collection } from "../../component/shop/shopData";
import { CollectionPreview } from "../collection-preview/collection-preview";

export class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: collection,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
       
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
