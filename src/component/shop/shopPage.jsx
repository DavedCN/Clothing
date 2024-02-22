import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CollectionsOverview } from "../collectionsOverView/collectionsOverView";
import { CollectionPage } from "../../pages/collection/collection";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";

//DATA FROM FIREBASE

export const ShopPage = () => {
  unsubcribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = collection(db, "collections");

    onSnapshot(collectionRef, async (snapShot) => {
      console.log(snapShot);
    });
  }, []);
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
