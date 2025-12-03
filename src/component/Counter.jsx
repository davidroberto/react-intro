import {useState} from "react";

const CookieClicker = () => {

   const [cookieCount, setCookieCount] = useState(0);

    const handleCookieClick = () => {
        setCookieCount(cookieCount + 1);
    };

    return (
        <>
            <button onClick={handleCookieClick}>🍪</button>
            <span>{cookieCount}</span>
        </>
    )
}

export default CookieClicker;