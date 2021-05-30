import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";

// import perfume from "../json/perfume.json";
// import bath from "../json/bath.json";
// import candle from "../json/candle.json";
// import diffuser from "../json/diffuser.json";
// import testing from "../json/testing.json";

// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
const productsCollectionRef = firebase.firestore().collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");

export const getJSON = (url) => {
  switch (url) {
      case "/products":
        return products;
      // case "/perfume":
      //   return perfume;
      // case "/bath":
      //   return bath;
      // case "/candle":
      //   return candle;
      // case "/diffuser":
      //   return diffuser;
      // case "/testing":
      //   return testing;
      // default:
      //   return products;
  }
};

//REFERENCE AUTH
const auth = firebase.auth();

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allProducts";
  let jsonProducts = [];

// QUERY PRODUCTS
let querySnapshot;
if (collectionName === "allProducts")
  querySnapshot = await allProductsCollectionRef.get();
else
  querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
  jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const PerfumeDetail = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};