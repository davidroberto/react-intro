import {useState} from "react";

const CookieClicker = () => {

   const [cookieCount, setCookieCount] = useState(0);
   const [rewardsImages, setRewardsImages] = useState([]);

    const handleCookieClick = () => {
        setCookieCount(cookieCount + 1);

        if (cookieCount === 9) {
            setRewardsImages([...rewardsImages, "https://storage.canalblog.com/38/72/71856/38206478.jpg"]);
        }

        if (cookieCount === 19) {
            setRewardsImages([...rewardsImages, "https://www.urbaneo.eu/wp-content/uploads/2024/04/abribus-helios-standard.webp"]);
        }

        if (cookieCount === 29) {
            setRewardsImages([...rewardsImages, "https://toutelatele.ouest-france.fr/local/cache-gd2/c3/4328f717d31770bfed357440c29eb5.jpg"]);
        }
    };



    return (
        <>
            <button onClick={handleCookieClick}>🍪</button>
            <span>{cookieCount}</span>

            <aside>
                <h2>Récompenses :</h2>
                <ul>
                    {rewardsImages.map((reward, index) => (
                        <li key={index}>
                            <img src={reward} width="200" />
                        </li>
                    ))}
                </ul>
            </aside>

        </>
    )
}

export default CookieClicker;