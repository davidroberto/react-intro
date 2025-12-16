import {Link} from "react-router-dom";

const Header = () => {

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("search submitted");
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