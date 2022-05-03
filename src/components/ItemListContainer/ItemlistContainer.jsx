import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: "Creatina Star Nutrition",
        price: "$2500",
        stock: "2",
        imageUrl:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/306/768/products/creatina-1kg1-58d5c3eee9f93629aa16173039257327-1024-1024.png",
      },
      {
        id: 2,
        title: "Creatina Universal",
        price: "$1500",
        stock: "2",
        imageUrl:
          "https://desuplementos.com/wp-content/uploads/2020/09/Universal-Creatina-500-Grs-Frente-504x504.jpg",
      },
      {
        id: 3,
        title: "Creatina MuscleTech",
        price: "$1000",
        stock: "2",
        imageUrl:
          "https://desuplementos.com/wp-content/uploads/2019/12/MUSCLETECH-PLATINUM-CREATINE-504x504.jpg",
      },
      {
        id: 4,
        title: "Creatina GenTech",
        price: "$2350",
        stock: "2",
        imageUrl:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/247/962/products/creatina-masticable1-fc98b6c9fd8ccb965f16256732393604-1024-1024.jpg",
      },
    ];
    const productsFiltered = category
      ? productsList.filter((p) => p.category === category)
      : productsList;
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  // function dummy() {
  //   console.log('dummy prop function');
  // }
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrio un error, revisar la consola!");
      });
  }, [categoryId]);

  return (
    <div className="list-item-container">
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
