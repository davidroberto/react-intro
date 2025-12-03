import {useState} from "react";

const CookieClicker = () => {

   const [cookieCount, setCookieCount] = useState(0);
   const [rewards, setRewards] = useState([]);

    const handleCookieClick = () => {
        setCookieCount(cookieCount + 1);

        if (cookieCount === 9) {
            setRewards([...rewards, "sandwich à la fraise"]);
        }

        if (cookieCount === 19) {
            setRewards([...rewards, "abris bus"]);

        }

        if (cookieCount === 29) {
            setRewards([...rewards, "Bill du bigdeal"]);
        }
    };



    return (
        <>
            <button onClick={handleCookieClick}>🍪</button>
            <span>{cookieCount}</span>

            <aside>
                <h2>Récompenses :</h2>
                <ul>
                    {rewards.map((reward, index) => (
                        <li key={index}>{reward}</li>
                    ))}
                </ul>
            </aside>

        </>
    )
}

export default CookieClicker;