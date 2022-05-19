import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: "Creatina Star Nutrition",
        price: "2500",
        stock: "2",
        category: "creatina",
        imageUrl:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/306/768/products/creatina-1kg1-58d5c3eee9f93629aa16173039257327-1024-1024.png",
      },
      {
        id: 2,
        title: "Creatina Universal",
        price: "1500",
        stock: "2",
        category: "creatina",
        imageUrl:
          "https://desuplementos.com/wp-content/uploads/2020/09/Universal-Creatina-500-Grs-Frente-504x504.jpg",
      },
      {
        id: 3,
        title: "Creatina MuscleTech",
        price: "1000",
        stock: "2",
        category: "creatina",
        imageUrl:
          "https://desuplementos.com/wp-content/uploads/2019/12/MUSCLETECH-PLATINUM-CREATINE-504x504.jpg",
      },
      {
        id: 4,
        title: "Creatina GenTech",
        price: "2350",
        stock: "2",
        category: "creatina",
        imageUrl:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/247/962/products/creatina-masticable1-fc98b6c9fd8ccb965f16256732393604-1024-1024.jpg",
      },
      {
        id: 5,
        title: "Proteina ENA True Made",
        price: "3100",
        stock: "4",
        category: "proteina",
        imageUrl:
          "https://farmacityar.vteximg.com.br/arquivos/ids/216642-1000-1000/203644_suplemento-dietario-ena-whey-protein-sabor-chocolate-x-1000-g_imagen-1.jpg?v=637705117727900000",
      },
      {
        id: 6,
        title: "Pre-Entreno PRE-WORKOUT",
        price: "2765",
        stock: "1",
        category: "preentreno",
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_886557-MLA49357655448_032022-V.jpg",
      },
    ];
    const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList;
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((res) => {
        setProducts(res);
      });
  }, [categoryId]);

  return (
    <div className="list-item-container">
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
