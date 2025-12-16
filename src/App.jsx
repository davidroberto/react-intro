import "./App.css";
import ListProducts from "./component/ListProducts.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShowProductPage from "./pages/ShowProductPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ShowProductPage />} />
            <Route path={"/products/search"} element={<SearchResultsPage />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
