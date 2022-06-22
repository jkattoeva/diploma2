
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import NotFound from "./NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
