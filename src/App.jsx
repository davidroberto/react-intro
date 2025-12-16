import "./App.css";
import ListArticles from "./component/ListArticles.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShowArticlePage from "./pages/ShowArticlePage.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListArticles />} />
            <Route path="/articles/:id" element={<ShowArticlePage />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
