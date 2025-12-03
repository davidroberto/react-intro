import {useState} from "react";

const ListArticles = () => {

  const [products, setProducts] = useState([]);


  if (products.length === 0) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
  }


  return (
    <section>
      <h1>Lists Products</h1>

      <section>
        {products.map(product => (
            <article key={product.id}>
                <h2>{product.title}</h2>
            </article>
        ))}
      </section>
    </section>
  );
};

export default ListArticles;
