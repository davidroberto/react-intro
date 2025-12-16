import {Link, useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const search = event.target.search.value;

        navigate(`/products/search?s=${search}`);
    }

    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Accueil</Link>
                </li>
            </ul>

            <form onSubmit={handleSearchSubmit}>
                <input type="text" name="search" placeholder="Rechercher..." />
                <button type="submit">OK</button>
            </form>
        </header>
    );

}

export default Header;