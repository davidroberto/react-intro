import {useState} from "react";

const ListArticles = () => {

  const [products, setProducts] = useState([]);


    // au premier chargement du composant
    // le state products contient un tableau vide
    // donc on passe dans le if
    // donc : on fait une requete fetch pour aller chercher les produits
    // et on les stocke dans le state products via setProducts
    // ce qui recharge le composant (au second chargement
    // on ne passe pas dans le if car le tableau n'est plus vide)
  if (products.length === 0) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
  }


  return (
    <section>
      <h1>Lists Products</h1>

      <section>
        <div>
            {products.length === 0 && <p>Loading products...</p>}
        </div>
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
