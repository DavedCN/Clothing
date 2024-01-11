import { HomePage } from "./pages/homepage/homepage";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { ShopPage } from "./component/shop/shopPage";
import { Header } from "./component/header/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/shop" Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
