// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";

// INITIALIZE FIREBASE
// const firebaseConfig = {
//     apiKey: "AIzaSyBUpCZlYJ4cWEj0K2rUlnKQtA3YHB9Yotk",
//     authDomain: "freesia-5e991.firebaseapp.com",
//     databaseURL: "https://freesia-5e991.firebaseio.com",
//     projectId: "freesia-5e991",
//     storageBucket: "freesia-5e991.appspot.com",
//     messagingSenderId: "772311291727",
//     appId: "1:772311291727:web:992df6664a7167696b573a",
//     measurementId: "G-72GTY8KVRR"
//   };

// firebase.initializeApp(firebaseConfig);
// const productsCollectionRef = firebase.firestore().collection("products");
// const productsDocRef = productsCollectionRef.doc("json");
// const allProductsCollectionRef = productsDocRef.collection("allProducts");


// export const getProductById = async (productId) => {
//     // REFERENCE PRODUCTS COLLECTION
//     const doc = await allProductsCollectionRef.doc(productId).get();
//     return doc.data()
//   }

// export const getProducts = async (url) => {
//     const collection = jsonInfo.find(element => element.url === url);
//     const collectionName = collection.name || "allProducts";
//     console.log(collectionName)
//     let jsonProducts = [];

// QUERY PRODUCTS
// let querySnapshot;
// if (collectionName === "allProducts")
//     querySnapshot = await allProductsCollectionRef.get();
// else
//     querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
//     querySnapshot.forEach((doc) => {
//     jsonProducts.push(doc.data());
//     });
//     return jsonProducts;
// }

// export const PerfumeDetail = () => {
//     products.forEach((product) => {
//       const docRef = allProductsCollectionRef.doc();
//       const id = docRef.id;
//       // Store Data for Aggregation Queries
//       docRef.set({
//         ...product,
//         id
//       });
//     })
//   }

// export const authenticateAnonymously = () => {
//     return firebase.auth().signInAnonymously();
//   };

export const getJSON = (url) => {
  switch (url) {
      case "/products":
          return products;
      
  }
}