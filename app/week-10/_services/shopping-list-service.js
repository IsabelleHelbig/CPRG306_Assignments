import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  // Reference to the 'items' subcollection under the user's document
  const itemsCollectionRef = collection(db, "users", userId, "items");

  // Get all documents from the 'items' subcollection
  const querySnapshot = await getDocs(itemsCollectionRef);

  // Map through each document and create an array of items
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return items;
};

export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
};
