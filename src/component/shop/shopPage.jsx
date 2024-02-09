import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../collectionsOverView/collectionsOverView";
import CollectionPage from "../../pages/collection/collection";

export const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />}></Route>
        <Route path=":id" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
