import { HomePage } from "./pages/homepage/homepage";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS PAGE</h1>

      <button>
        <Link to="/">Go to Home</Link>
      </button>
      <button>
        <Link to="/shop/jackets">Go to Hats </Link>
      </button>
    </div>
  );
};

const JacketsPage = (props) => (
  <div>
    <h1>JACKETS PAGE</h1>
    <button>
      <Link to="/">Go to Home </Link>
    </button>
    <button>
      <Link to="/shop/hats">Go to Hats </Link>
    </button>
  </div>
);

const MensPage = (props) => (
  <div>
    <h1>MENS PAGE</h1>
    <button>
      <Link to="/">Go to Home</Link>
    </button>
    <button>
      <Link to="/shop/hats">Go to Hats </Link>
    </button>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/shop/hats" Component={HatsPage} />
        <Route exact path="/shop/jackets" Component={JacketsPage} />
        <Route exact path="/shop/mens" Component={MensPage} />
      </Routes>
    </div>
  );
}

export default App;
