import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../component/Header.jsx";

const ShowProductPage = () => {


    const {id} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        // récupère le produit sur l'api en utilisant l'id
        // de l'url
        fetch("https://fakestoreapi.com/products/" + id)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, []);

    return (

        <>
            <Header />
            <section>
                <h1>Show product {id}</h1>

                {product && (<div>
                        <h2>{product.title}</h2>
                        <p>Prix : {product.price}</p>
                    </div>
                )}
            </section>
        </>

    )
}

export default ShowProductPage;