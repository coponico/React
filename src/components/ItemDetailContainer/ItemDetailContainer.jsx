import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function getItem() {
  const myPromise = new Promise((resolve, reject) => {
    const item = {
      id: 1,
      title: "Creatina Star Nutrition",
      price: "$2500",
      stock: "2",
      imageUrl:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/306/768/products/creatina-1kg1-58d5c3eee9f93629aa16173039257327-1024-1024.png",
    };
    setTimeout(() => {
      resolve(item);
    }, 2000);
  });
  return myPromise;
}

function ItemDetailContainer() {
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem()
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Error, chequear consola");
      });
  }, []);

  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
