import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
// import { collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../services/firebase'

// function getProducts(category) {
//   // const db = getFirestore();
//   console.log("Db in ILC", db)

//   const productsTry = collection(db, "Items")
//   console.log("ProductsTry in ILC", productsTry)



//   const itemCollection = collection(db, 'items');

//   const q = query(
//     itemCollection
//   );

//   return getDocs(q)
// }

const productsTry = collection(db, "Items")

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  console.log("Products setteds", products)

  useEffect(()=>{
    const getData = async(categoryId) => {
      console.log("CategoryID in useEffect ILC", categoryId)

      const queryData = categoryId 
      ? (query(productsTry, where("category", "==" ,  categoryId))) 
      : query(productsTry)

      const data = await getDocs(queryData)

      const products = data.docs.map(product => {
        console.log("product with data method of Firebase", product.data())
        // Le creo la key id con el product.id y guardo las otras properties
        return {id: product.id, ...product.data()}
      })
      setProducts(products)
    }
    getData(categoryId)
  }, [categoryId])

  // useEffect(() => {
  //   const db = getFirestore();

  //   const itemCollection = collection(db, 'items');

  //   const q = query(
  //     itemCollection,
  //     where('price', '<', 500),
  //     limit(1)
  //   );

  //   getDocs(q)
  //     .then(snapshot => {
  //       console.log(snapshot.docs.map(doc => {
  //         return { ...doc.data(), id: doc.id }
  //       }));
  //     })
  //     .catch(
  //       err => console.log(err)
  //     );
  //   getProducts(categoryId)
  //   .then(snapshot => {
  //     setProducts(snapshot.docs.map(doc => {
  //       return { ...doc.data(), id: doc.id }
  //     }));
  //     });
  // }, [categoryId]);

  return (
    <div className="list-item-container">
      <ItemList items={products}/>
    </div>
  );
}

export default ItemListContainer;
