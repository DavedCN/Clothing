import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CollectionsOverview } from "../collectionsOverView/collectionsOverView";
import { CollectionPage } from "../../pages/collection/collection";
import { collection, onSnapshot } from "firebase/firestore";
import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";

//DATA FROM FIREBASE

export const ShopPage = () => {
  // unsubcribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = collection(db, "collections");

    console.log("Coll Ref:", collectionRef);

    onSnapshot(collectionRef, async (snapShot) => {
      convertCollectionsSnapshotToMap(snapShot);
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
