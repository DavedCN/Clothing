import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import { HomePage } from "./pages/homepage/homepage";
import { ShopPage } from "./component/shop/shopPage";
import { Header } from "./component/header/header";
import { SignInAndSignUpPage } from "./component/signin-signup/signin-signup";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/shop" Component={ShopPage} />
        <Route exact path="/signin" Component={SignInAndSignUpPage} />
      </Routes>
    </div>
  );
}

export default App;
