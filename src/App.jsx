import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
