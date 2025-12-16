import Header from "../component/Header.jsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

const SearchResultsPage = () => {

    // je récupére les paramètres de l'url
    // donc ici la recherche de l'utilisateur
    const [s] = useSearchParams();

    const [results, setResults] = useState(null);


    useEffect(() => {
        // L'url utilisée dépend de l'api
        // attention pour l'api fakestoreapi cette url n'existe pas
        // donc ça affiche tous les produits
        fetch("https://fakestoreapi.com/products?search=" + s.values())
            .then(response => response.json())
            .then(data => setResults(data));
    })


    return (

        <>
            <Header />
            <section>
                <h1>Page de résultats de recherche pour : {s.values()}</h1>

                {results && results.length > 0 ? (
                    <ul>
                        {results.map(product => (
                            <li key={product.id}>
                                {product.title} - {product.price} €
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun résultat trouvé.</p>
                )}
            </section>
        </>

    )
}

export default SearchResultsPage;